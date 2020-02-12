import React, { Component } from 'react';

class Service extends Component {
  render() {
    const serviceItems = () => {
      return this.props.data.serviceItems.items.map((item) =>
        <li key={ item.name }><b>{ item.name }</b> -
          { item["fine-print"] ? " (" + item["fine-print"] + ")" : undefined }
          { item.price ? " $" + item.price : undefined }</li>
      );
    };
    return (
      <div className="service">
        <h3>{ this.props.data.serviceName }</h3>
        <ul>
          { serviceItems() }
        </ul>
      </div>
    )
  }
}

export default Service;
