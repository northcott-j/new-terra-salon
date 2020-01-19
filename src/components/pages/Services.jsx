import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Services extends Component {
  render() {
    return (
      <div className="contactUs">
        <Helmet>
          { /* TODO :: Make this use Contentful to generate */ }
          <meta charSet="utf-8" />
          <title>Services - Terra Salon in Nashua, NH</title>
          <meta name="description" content="Terra is a full service salon
          located in Nashua, NH that is committed to providing earth friendly hair care services." />
          <link rel="canonical" href="http://www.terrasalonnh.com/" />
        </Helmet>
        <h2>Services</h2>
      </div>
    );
  }
}

export default Services;
