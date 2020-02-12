import React from 'react';
import Page from './Page';
import AddressBlock from '../AddressBlock';
import ContactForm from '../ContactForm';
import Hours from '../Hours';
import Navigate from '../Navigate';

class ContactUs extends Page {
  CONTENTFUL_ID = '5yRDW9exNLwrn7501EBBSF';
  PAGE_NAME = 'contact-us';

  childRender() {
    const contactMapping = () => {
      const mapping = {};
      this.state.data.fields.subItems.forEach((method) =>
        mapping[method.fields.name] = method.fields
      );
      return mapping;
    };
    const awaitRender = () => {
      if (this.state.data) {
        const contacts = contactMapping();
        return (
          <div style={ {paddingLeft: "15px"} }>
            <AddressBlock address={ contacts["Store Location"].text }
                          phone={ contacts.Phone.text }
                          email={ contacts.Email.text } />
            <ContactForm />
            <Hours hours={ this.state.data.fields.content.hours } />
            <Navigate mapsUrl={ this.state.data.fields.content['google-iframe'] }
                      navigateUrl={ contacts["Store Location"].link } />
        </div>)
      }
    };
    return (
      <div className="contact-us">
        <h1 className="page-header">Contact Us</h1>
        { awaitRender() }
      </div>
    );
  }
}

export default ContactUs;
