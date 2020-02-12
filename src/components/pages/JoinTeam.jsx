import React from 'react';
import Page from './Page';
import JobOpening from '../JobOpening';

class JoinTeam extends Page {
  CONTENTFUL_ID = '5vwyLonq0H2xnqSlKSjv1q';
  PAGE_NAME = 'join-team';

  childRender() {
    const jobOpenings = () => {
      return this.state.data.fields.subItems.map((opening) =>
        <JobOpening key={ opening.fields.title } data={ opening.fields } />
      );
    };
    const awaitRender = () => {
      if (this.state.data) {
        return jobOpenings();
      } else {
        return undefined
      }
    };
    return (
      <div className="join-team">
        <h1 className="page-header">Job Openings</h1>
        { awaitRender() }
      </div>
    );
  }
}

export default JoinTeam;
