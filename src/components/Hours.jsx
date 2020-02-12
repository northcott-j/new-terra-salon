import React, { Component } from 'react';

class Hours extends Component {
  render() {
    const hourBreakdown = () => {
      return this.props.hours.map((hour) =>
        <h4 key={ hour }>{ hour }</h4>
      );
    };
    return (
      <div className="hours">
        <h3>Hours</h3>
        { hourBreakdown() }
      </div>
    )
  }
}

export default Hours;
