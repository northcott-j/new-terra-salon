import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Image, Responsive, Icon } from 'semantic-ui-react';
import logo from '../logo.png';

class NavBar extends Component {
  state = {
    menuItems: [
      {
        name: 'services',
        color: 'grey',
        to: '/services',
        text: 'Services',
        icon: 'sitemap'
      },
      {
        name: 'ourTeam',
        color: 'grey',
        to: '/our-team',
        text: 'Our Team',
        icon: 'users'
      },
      {
        name: 'contactUs',
        color: 'grey',
        to: '/contact-us',
        text: 'Contact Us',
        icon: 'comments'
      }
    ]
  }

  render() {
    const renderMenuItems = (isMobile) => {
      const className = (isMobile) ? "navbar-icon" : "";
        return this.state.menuItems.map((menuItem) =>
          <Menu.Item
            as={NavLink}
            key={ menuItem.name }
            name={ menuItem.name }
            color={ menuItem.color }
            to={ menuItem.to }
            className={ className }
            >
            { (isMobile) ? <Icon className="clear-margins"
                                 size="large"
                                 name={ menuItem.icon } /> : menuItem.text }
          </Menu.Item>
        );
    };

    const renderMenu = (isMobile) => {
      return (
        <Menu borderless={ !isMobile } size='huge'>
          <Menu.Item
            name='home'
            href='/#/'
            className='navbar-logo'
            >
            <Image src={logo} alt="Terra Salon Logo" size='small' />
          </Menu.Item>
          <Menu.Menu position='right' icon={ isMobile ? isMobile : undefined }>
            { renderMenuItems(isMobile) }
          </Menu.Menu>
        </Menu>
      )
    }

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          { renderMenu(true) }
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          { renderMenu(false) }
        </Responsive>
      </div>
    )
  }
}

export default NavBar
