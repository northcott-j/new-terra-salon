import React from 'react';
import Page from './Page';

class OurTeam extends Page {
  CONTENTFUL_ID = '3TUOPNwXzsUDOY45XnYE0g';
  PAGE_NAME = 'our-team';

  childRender() {
    return (
      <div className="our-team">
        <h2>Our Team</h2>
      </div>
    );
  }
}

export default OurTeam;
