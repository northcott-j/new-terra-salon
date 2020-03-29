// eslint-disable-next-line
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Page extends Component {
  CONTENTFUL_ID = '';
  PAGE_NAME = null;

  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context,
      data: null,
      current_employee: null,
      employeeGrid_list: null,
      employeeGrid_list_loaded: false
    };
  }

  async componentDidMount() {
    const data = await this.state.appState.getPage(this.CONTENTFUL_ID);
    this.state.appState.setCurrentPage(this.PAGE_NAME);
    this.setState({ data });
  };

  buildBackgroundStyle() {
    if (this.state.data) {
      const imageUrl = this.state.data.fields.background.fields.file.url;
      return {
        backgroundImage: "url(" + imageUrl + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
    } else {
      return {};
    }
  };

  buildHelmet() {
    if (this.state.data) {
      if (this.state.data.fields.meta) {
        return (
          <Helmet>
            <title>{this.state.data.fields.meta.fields.metaTitle} - Terra Salon in Nashua, NH</title>
            <meta name="description" content={this.state.data.fields.meta.fields.metaDescription} />
          </Helmet>
        )
      }
    }
  };

  childRender() {
    // Definie this in class that extends this
  }

  render() {
    return (
      <div className="page" style={this.buildBackgroundStyle()}>
        <div className="page-content">
          {this.buildHelmet()}
          {this.childRender(this.state.data)}
        </div>
      </div>
    )
  }
}

export default Page;
