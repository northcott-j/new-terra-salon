import React, { Component } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

class JobOpening extends Component {
  render() {
    const jobOffers = () => {
      return this.props.data.offers.map((offer) =>
        <li key={ offer }>{ offer }</li>
      );
    };
    return (
      <div className="job-opening">
        <div className="job-opening-content">
          <h2>{ this.props.data.title }</h2>
          <em>{ this.props.data.jobType }</em>
          <div style={ {marginTop: "15px"} }>
            { documentToReactComponents(this.props.data.description) }
          </div>
          <div className="job-opening-offers">
            <h3>Terra Offers</h3>
            <ul>
              { jobOffers() }
            </ul>
          </div>
        </div>
        <div className="outlined-button" style={ { maxWidth: "150px", textAlign: "center" } }>
          <a href={ this.props.data.externalApplication } rel="noopener noreferrer" target="_blank">APPLY NOW</a>
        </div>
      </div>
    )
  }
}

export default JobOpening;
