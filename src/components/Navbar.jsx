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
    const isOnServices = this.state.appState.currentPage() === 'services';
    var serviceClassName = 'navServices';
    var serviceClassNameD = 'navServices';
    const isOnOurTeam = this.state.appState.currentPage() === 'our-team';
    var ourTeamClassName = 'ourTeam'
    var ourTeamClassNameD = 'ourTeam'
    const isOnContactUs = this.state.appState.currentPage() === 'contact-us';
    var contactUsClassName = 'contactUs';
    var contactUsClassNameD = 'contactUs';
    const isOnNowHiring = this.state.appState.currentPage() === 'now-hiring';
    var nowHiringClassName = 'nowHiring'
    var nowHiringClassNameD = 'nowHiring'

    if (isOnServices) {
      serviceClassName = 'navServices-active';
      ourTeamClassName = 'ourTeam'
      contactUsClassName = 'contactUs';
      nowHiringClassName = 'nowHiring'
      serviceClassNameD = 'nav-Services-active';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring'
    }
    if (isOnOurTeam) {
      serviceClassName = 'navServices';
      ourTeamClassName = 'ourTeam-active';
      contactUsClassName = 'contactUs';
      nowHiringClassName = 'nowHiring'
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team-active'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring'
    }
    if (isOnContactUs) {
      serviceClassName = 'navServices';
      ourTeamClassName = 'ourTeam';
      contactUsClassName = 'contactUs-active';
      nowHiringClassName = 'nowHiring'
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us-active';
      nowHiringClassNameD = 'now-Hiring'
    }
    if (isOnNowHiring) {
      serviceClassName = 'navServices';
      ourTeamClassName = 'ourTeam'
      contactUsClassName = 'contactUs';
      nowHiringClassName = 'nowHiring-active';
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring-active'
    }

    const dropDown = (
      <div className='dropContent'>
        <a onClick={() => this.dropMenu()} href='/#/services/' className={serviceClassName}>Services</a>
        <div className='seperator' />
        <a onClick={() => this.dropMenu()} href='/#/our-team/' className={ourTeamClassName}>Our Team</a>
        <div className='seperator' />
        <a onClick={() => this.dropMenu()} href='/#/contact-us/' className={contactUsClassName}>Contact Us</a>
        <div className='seperator' />
        <a onClick={() => this.dropMenu()} href='/#/now-hiring/' className={nowHiringClassName}>Now Hiring</a>
        <div className='seperator' />
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
              <a href='/#/services/' className={serviceClassNameD}>Services</a>
              <a href='/#/our-team/' className={ourTeamClassNameD}>Our Team</a>
              <a href='/#/contact-us/' className={contactUsClassNameD}>Contact Us</a>
              <a href='/#/now-hiring/' className={nowHiringClassNameD}>NOW HIRING</a>
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
      <div className='navbarWrapper'>
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
