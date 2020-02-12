import React, { Component } from 'react';

class AddressBlock extends Component {
  render() {
    return (
      <div className="address-block">
        <h4 className="rich-text">{ this.props.address }</h4>
        <h4>{ this.props.phone }</h4>
        <h4>{ this.props.email }</h4>
      </div>
    )
  }
}

export default AddressBlock;
