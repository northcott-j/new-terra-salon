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
    var serviceActive = 'Services';
    var serviceClassNameD = 'navServices';
    const isOnOurTeam = this.state.appState.currentPage() === 'our-team';
    var ourTeamActive = 'Our Team'
    var ourTeamClassNameD = 'ourTeam'
    const isOnContactUs = this.state.appState.currentPage() === 'contact-us';
    var contactUsActive = 'Contact Us';
    var contactUsClassNameD = 'contactUs';
    const isOnNowHiring = this.state.appState.currentPage() === 'now-hiring';
    var nowHiringActive = 'Now Hiring'
    var nowHiringClassNameD = 'now-Hiring'

    if (isOnServices) {
      serviceActive = '<span class=\'dot\'>&mdash;</span> Services <span class=\'dot\'>&mdash;</span>';
      ourTeamActive = 'Our Team'
      contactUsActive = 'Contact Us';
      nowHiringActive = 'NOW HIRING';
      serviceClassNameD = 'nav-Services-active';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring'
    }
    if (isOnOurTeam) {
      serviceActive = 'Services';
      ourTeamActive = '<span class=\'dot\'>&mdash;</span> Our Team <span class=\'dot\'>&mdash;</span>'
      contactUsActive = 'Contact Us';
      nowHiringActive = 'NOW HIRING';
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team-active'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring'
    }
    if (isOnContactUs) {
      serviceActive = 'Services';
      ourTeamActive = 'Our Team'
      contactUsActive = '<span class=\'dot\'>&mdash;</span> Contact Us <span class=\'dot\'>&mdash;</span>';
      nowHiringActive = 'NOW HIRING';
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us-active';
      nowHiringClassNameD = 'now-Hiring'
    }
    if (isOnNowHiring) {
      serviceActive = 'Services';
      ourTeamActive = 'Our Team'
      contactUsActive = 'Contact Us';
      nowHiringActive = '<span class=\'dot\'>&mdash;</span> NOW HIRING <span class=\'dot\'>&mdash;</span>';
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring-active'
    }
    if (isOnHome) {
      serviceActive = 'Services';
      ourTeamActive = 'Our Team'
      contactUsActive = 'Contact Us';
      nowHiringActive = 'NOW HIRING';
      serviceClassNameD = 'nav-Services';
      ourTeamClassNameD = 'our-Team'
      contactUsClassNameD = 'contact-Us';
      nowHiringClassNameD = 'now-Hiring';
    }

    const dropDown = (
      <div className='dropContent'>
        <a onClick={() => this.dropMenu()} href='/#/services/' className='navServices' dangerouslySetInnerHTML={{ __html: serviceActive }} />
        <div className='seperator' />
        <a onClick={() => this.dropMenu()} href='/#/our-team/' className='ourTeam' dangerouslySetInnerHTML={{ __html: ourTeamActive }} />
        <div className='seperator' />
        <a onClick={() => this.dropMenu()} href='/#/contact-us/' className='contactUs' dangerouslySetInnerHTML={{ __html: contactUsActive }} />
        <div className='seperator' />
        <a onClick={() => this.dropMenu()} href='/#/now-hiring/' className='nowHiring' dangerouslySetInnerHTML={{ __html: nowHiringActive }} />
        <div className='seperator' />
      </div>
    )

    var navDesktop = 'nav-bar'
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
        if (isOnHome) {
          navDesktop = 'nav-bar-hide'
        }
        else {
          navDesktop = 'nav-bar'
        }
        return (
          <div className={navDesktop}>
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
