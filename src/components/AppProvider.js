import React, { Component } from 'react';
import AppContext from '../app-context';
import * as contentful from 'contentful';

export default class AppProvider extends Component {
  constructor() {
    super();

    this.state = {
      client: null,
      pages: {},
      _currentPage: null,
      contactMapping: function (data) {
        const mapping = {};
        data.fields.subItems.forEach((method) =>
          mapping[method.fields.name] = method.fields
        );
        return mapping;
      },
      currentPage: function () { return this.state._currentPage }.bind(this),
      getPage: async function (pageId) {
        if (this.state.pages[pageId]) {
          return Promise.resolve(this.state.pages[pageId]);
        } else {
          return this.fetchPageDetails(pageId);
        }
      }.bind(this),
      setCurrentPage: function (pageName) {
        this.setState({ _currentPage: pageName });
      }.bind(this),
      show_all_employees: true,
      current_employee: null
    }
  }

  async buildClient() {
    return contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_KEY
    });
  };

  async fetchPageDetails(pageId) {
    if (!this.state.client) {
      const client = await this.buildClient();
      this.state.client = client;
    };
    const page = await this.state.client.getEntry(pageId);
    const pages = this.state.pages;
    pages[pageId] = page;
    return page;
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
