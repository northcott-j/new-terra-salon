import React, { Component } from 'react';

class Footer extends Component {
  CONTENTFUL_ID = '5ftApZdeCNEaIQE2LDtvHK';

  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context,
      data: { fields: { socialMedia: [], contactMethods: [] } }
    };
  }

  async componentDidMount() {
    const data = await this.state.appState.getPage(this.CONTENTFUL_ID);
    this.setState({ data });
  };

  render() {
    const socials = this.state.data.fields.socialMedia;
    const footerSocials = socials.map((social) =>
      <div key={ social.fields.name } className="footer-social">
        <a rel="noopener noreferrer" target="_blank" href={ social.fields.link }>
          <i className={"fa " + social.fields.icon}></i>
        </a>
      </div>
    );

    const contacts = this.state.data.fields.contactMethods;
    const footerContacts = contacts.map((contact) =>
      <div key={ contact.fields.name } className='col-sm footer-contact'>
        <a rel="noopener noreferrer" target="_blank" href={ contact.fields.link }>
          <img className="footer-contact-icon"
               src={ contact.fields.icon.fields.file.url }
               alt={ contact.fields.icon.fields.description } />
          <div className="rich-text">{ contact.fields.text }</div>
        </a>
      </div>
    );

    return (
      <div className="terra-footer">
        <div className="footer-socials">
          { footerSocials }
        </div>
        <div className="footer-contacts container-fluid">
          <div className="row">
            { footerContacts }
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
