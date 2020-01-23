import React from 'react';
import Page from './Page';

class Services extends Page {
  CONTENTFUL_ID = '3LDAtWbGp4mOtCQayJ2j8U';

  childRender() {
    return (
      <div className="services">
        <h2>Services</h2>
      </div>
    );
  }
}

export default Services;
