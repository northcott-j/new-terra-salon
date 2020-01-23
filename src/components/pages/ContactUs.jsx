import React from 'react';
import Page from './Page';

class ContactUs extends Page {
  CONTENTFUL_ID = '5yRDW9exNLwrn7501EBBSF';

  childRender() {
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
      </div>
    );
  }
}

export default ContactUs;
