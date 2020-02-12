import React from 'react';
import Page from './Page';
import Service from '../Service';

class Services extends Page {
  CONTENTFUL_ID = '3LDAtWbGp4mOtCQayJ2j8U';
  PAGE_NAME = 'services';

  childRender() {
    const pageDescription = () => {
      if (this.state.data) {
        const content = this.state.data.fields.content;
        const description = content.description.map((line) =>
          <i key={ line }><br />{ line }</i>
        );
        return (
          <p className="services-description">
            <b>
              <i>
                { content['lead-line'] }
              </i>
            </b>
            { description }
          </p>
        )
      } else {
        return ""
      }
    };
    const pageServices = () => {
      if (this.state.data) {
        return this.state.data.fields.subItems.map((item) =>
          <Service key={ item.fields.serviceName } data={ item.fields } />
        );
      } else {
        return ""
      }
    };
    const pageFooter = () => {
      if (this.state.data) {
        return this.state.data.fields.content.footnotes.map((note) =>
        <i key={ note }><br />{ note }</i>
      );
      } else {
        return ""
      }
    };
    return (
      <div className="services">
        <h1 className="page-header">Services</h1>
        { pageDescription() }
        { pageServices() }
        { pageFooter() }
      </div>
    );
  }
}

export default Services;
