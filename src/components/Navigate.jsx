import React, { Component } from 'react';

class Navigate extends Component {
  render() {
    const openMaps = () => {
      window.location.href = this.props.navigateUrl;
    };
    return (
      <div className="navigate">
        <iframe
          title="Salon Location"
          style={ {maxWidth: "100%"} }
          src={ this.props.mapsUrl }
          width="400" height="300"
          frameBorder="0">
        </iframe>
        <input className="branded-button" style={ {display: "block", marginLeft: 0} }
               type="button" value="Navigate"
               onClick={ openMaps } />
      </div>
    )
  }
}

export default Navigate;
