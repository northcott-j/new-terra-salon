import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Image } from 'semantic-ui-react'
import logo from '../logo.png'

class NavBar extends Component {
  state = {}

  render() {
    return (
      <Menu stackable borderless size='huge' >
        <Menu.Item
          name='home'
          href='/#/'
          >
          <Image src={logo} alt="Terra Salon Logo" size='small' />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            as={NavLink}
            name='services'
            color="grey"
            to='/services'
            >
            Services
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            name='ourTeam'
            color="grey"
            to='/our-team'
            >
            Our Team
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            name='contactUs'
            color="grey"
            to='/contact-us'
            >
            Contact Us
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar
