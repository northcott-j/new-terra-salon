import React, { Component } from 'react';

class AddressBlock extends Component {
  render() {
    const address = () => (<h4 key="address" className="rich-text">{ this.props.address }</h4>);
    const email = () => (<h4 key="email">{ this.props.email }</h4>);
    const phone = () => (<h4 key="phone">{ this.props.phone }</h4>);
    const mapping = { 'address': address,  'email': email, 'phone': phone };
    const lines = () => {
      return this.props.order.map((contact) =>
        mapping[contact]()
      );
    };
    return (
      <div className="address-block">
        { lines() }
      </div>
    )
  }
}

export default AddressBlock;
