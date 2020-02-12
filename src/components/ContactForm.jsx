import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="contact-form">
        <h3>Drop us a Line</h3>
          <form id="myForm"
                style={ {width: "33%", marginTop: "-15px", minWidth: "250px", maxWidth: "300px"} }
                action="https://formspree.io/salon@terrasalonnh.com"
                method="POST">
                <input name="_cc" type="hidden" value="juanathan39+terra@gmail.com" /><br />
                <input className="full-width" name="_replyto" type="email" placeholder="Your Email" /><br />
                <input className="full-width" name="phone" type="text" placeholder="Your Phone Number" /><br />
                <span className="full-width"
                      style={ {display: "flex", justifyContent: "space-between", marginTop: "5px"} }>
                  <strong style={ {paddingRight: "5px"} }>Preferred Method:</strong>
                  <select style={{ flexGrow: 1 }} form="myForm" name="preferred_contact">
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                  </select>
                </span><br />
              <textarea className="full-width" name="message" rows="5" placeholder="Your Message" /><br />
              <input id="formSubmit" className="branded-button" style={{ marginLeft: "0px" }} type="submit" value="Send" />
              <h4 id="hidden" style={{ display: "none", textAlign: "center" }}>Thank you for your submission!</h4>
            </form>
      </div>
    )
  }
}

export default ContactForm;
