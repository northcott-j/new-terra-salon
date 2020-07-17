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

    return (
      <div className='margins'>
        < div className="our-team" >
          <div className="our-team-list" >
            <h2 className="OurTeam-title">Our Team</h2>
            <div className="OurTeam-titleUnderline" />
            <div className="profile-icons">
              {getOurTeamList()}
            </div>
          </div >
        </div >
      </div>
    );
  }
}

export default OurTeam;
