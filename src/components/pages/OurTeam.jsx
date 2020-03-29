import React from 'react';
import Page from './Page';
import OurTeamList from '../OurTeamList.jsx';

class OurTeam extends Page {
  CONTENTFUL_ID = '3TUOPNwXzsUDOY45XnYE0g';
  PAGE_NAME = 'our-team';

  childRender() {
    const getOurTeamList = () => {
      if (this.state.data) {
        return this.state.data.fields.subItems.map((item) =>
          <OurTeamList key={item.fields.name} data={item} />
        );
      } else {
        return ""
      }
    };

    const pageFooter = () => {
      if (this.state.data) {
        const content = this.state.data.fields.content;
        return content["hiring-link-text"]
      } else {
        return ""
      }
    };

    return (
      < div className="our-team" >
        <div className="our-team-list" >
          <h2 className="OurTeam-title">Our Team</h2>
          <div className="profile-icons">
            {getOurTeamList()}
          </div>
          <h5 className="OurTeam-footer">
            {pageFooter()}
          </h5>
        </div >
      </div >
    );
  }
}

export default OurTeam;
