import React from 'react';
import Page from './Page';

class OurTeam extends Page {
  CONTENTFUL_ID = '3TUOPNwXzsUDOY45XnYE0g';
  PAGE_NAME = 'our-team';

  loadProfile = (profile) => {
    this.setState({ current_employee: profile })
    this.setState({ show_all_employees: false })
  }

  childRender() {

    const getOurTeamList = () => {
      if (this.state.data) {
        return this.state.data.fields.subItems.map((item) =>
          <button onClick={() => this.loadProfile(item)} key={item.fields.name} className="profile-icon">
            <img alt='profilePics' src={item.fields.profile.fields.file.url} className="iconPic"></img>
            <div className="iconName">{item.fields.name}</div>
            <div className="iconTitle">{item.fields.title}</div>
          </button>
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

    const OurTeamList = (
      <div className="our-team-list" >
        <h2 className="OurTeam-title">Our Team</h2>
        <div className="profile-icons">
          {getOurTeamList()}
        </div>
        <h5 className="OurTeam-footer">
          {pageFooter()}
        </h5>
      </div >
    );

    const OurTeamProfile = (
      <h1>Bitches in the Crib</h1>
    )

    return (
      <div className="our-team">
        {this.state.show_all_employees ? OurTeamList : OurTeamProfile}
      </div>
    );
  }
}

export default OurTeam;
