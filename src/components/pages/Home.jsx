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
                <div>
                  <h2>{content["terra-definition"].pronounce}</h2>
                  <i>{content["terra-definition"]["word-type"]}</i>
                  <p>{content["terra-definition"]["definition"]}</p>
                </div>
                <div className="homeMenuMobile">
                  <a href='/#/services/' className='navServices-Home'>Services</a>
                  <a href='/#/our-team/' className='ourTeam-Home'>Our Team</a>
                  <a href='/#/contact-us/' className='contactUs-Home'>Contact Us</a>
                  <a href='/#/now-hiring/' className='nowHiring-Home'>NOW HIRING</a>
                </div>
              </div>

            </Responsive>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <div className="home-salon-description">{content["description"]}</div>
            </Responsive>
          </div>
        )
      } else {
        return undefined;
      }
    }
    return (
      <div className="home">
        <div className="home-content">
          {awaitRender()}
        </div>
      </div>
    );
  }
}

export default Home;