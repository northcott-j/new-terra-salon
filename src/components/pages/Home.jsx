import React from 'react';
import Page from './Page';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';

class Home extends Page {
  CONTENTFUL_ID = 'vCdkXXRVwLWXms4PgZAPK';
  PAGE_NAME = 'home';

  childRender() {
    const awaitRender = () => {
      if (this.state.data) {
        const content = this.state.data.fields.content;
        return (
          <div>
            <img src={logo} alt="Terra Salon Logo" />
            <Responsive {...Responsive.onlyMobile}>
              <div>
                <h2>{ content["terra-definition"].pronounce }</h2>
                <i>{ content["terra-definition"]["word-type"] }</i>
                <p>{ content["terra-definition"]["definition"] }</p>
              </div>
            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <div className="home-salon-description">{ content["description"] }</div>
            </Responsive>
            <div className="outlined-button" style={ { maxWidth: "150px", textAlign: "center" } }>
              <NavLink to="join-team">JOIN OUR TEAM</NavLink>
            </div>
          </div>
        )
      } else {
        return undefined;
      }
    }
    return (
      <div className="home">
        <div className="home-content">
          { awaitRender() }
        </div>
      </div>
    );
  }
}

export default Home;
