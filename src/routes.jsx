import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import AppContext from './app-context';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import OurTeam from './components/pages/OurTeam';
import JoinTeam from './components/pages/JoinTeam';
import ContactUs from './components/pages/ContactUs';
import ProfileGrid from './components/pages/ProfileGrid';


const Routes = () => (
  <App>
    <AppContext.Consumer>
      {(context) => (
        <Switch>
          <Route exact path="/" render={() => <Home context={context} />} />
          <Route exact path="/services" render={() => <Services context={context} />} />
          <Route exact path="/our-team" render={() => <OurTeam context={context} />} />
          <Route exact path="/our-team/:employee" render={() => <ProfileGrid context={context} />} />
          <Route exact path="/join-team" render={() => <JoinTeam context={context} />} />
          <Route exact path="/contact-us" render={() => <ContactUs context={context} />} />
        </Switch>
      )}
    </ AppContext.Consumer>
  </App>)

export default Routes
