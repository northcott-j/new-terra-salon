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
    const awaitRender = () => {
      if (this.state.data) {
        const contacts = this.state.appState.contactMapping(this.state.data);
        return (
          <div style={ {paddingLeft: "15px"} }>
            <AddressBlock address={ contacts["Store Location"].text }
                          phone={ contacts.Phone.text }
                          email={ contacts.Email.text }
                          order={ ['address', 'phone', 'email'] } />
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
