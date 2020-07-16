import React, { Component } from 'react';
import { Image, Responsive } from 'semantic-ui-react';
import logo from '../logo.png';
import drop from '../drop.png';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context,
      dropNav: false
    };
  }

  dropMenu = () => {
    if (!this.state.dropNav) {
      this.setState({ dropNav: true })
    }
    else {
      this.setState({ dropNav: false })
    }
  }

  render() {
    const isOnHome = this.state.appState.currentPage() === 'home';


    const dropDown = (
      <div className='dropContent'>
        <a href='/#/services/' className='navServices'>Services</a>
        <a href='/#/our-team/' className='ourTeam'>Our Team</a>
        <a href='/#/contact-us/' className='contactUs'>Contact Us</a>
        <a href='/#/now-hiring/' className='nowHiring'>Now Hiring</a>
      </div>
    )

    const renderMenu = (isMobile) => {
      if (isMobile) {
        if (!isOnHome) {
          return (
            <div className='navMobile'>
              <a href='/#/'>
                <Image className='navLogoMobile' src={logo} alt="Terra Salon Logo" size='small' />
              </a>
              <div className='dropDown'>
                <button onClick={() => this.dropMenu()} className='iconRef'><Image className='dropIcon' alt='drop' src={drop} /></button>
                {(this.state.dropNav) ? dropDown : ''}
              </div>
            </div>
          )
        }
      }
      else {
        return (
          <div className='nav-bar'>
            <div className="navLogo">
              {loadLogo()}
            </div>
            <div className='rightNav'>
              <a href='/#/services/' className='nav-Services'>Services</a>
              <a href='/#/our-team/' className='our-Team'>Our Team</a>
              <a href='/#/contact-us/' className='contact-Us'>Contact Us</a>
              <a href='/#/now-hiring/' className='now-Hiring'>NOW HIRING</a>
            </div>
          </div>
        )
      }
    }

    const loadLogo = () => {
      const isOnHome = this.state.appState.currentPage() === 'home';
      if (!isOnHome) {
        return (
          <a className='navLogo' href='/#/'>
            <Image className='navLogoI' src={logo} alt="Terra Salon Logo" height='60px' width='133px' />
          </a>
        )
      }
    }


    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          {renderMenu(true)}
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          {renderMenu(false)}
        </Responsive>
      </div>
    )
  }
}

export default NavBar
