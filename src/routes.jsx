import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import OurTeam from './components/pages/OurTeam';
import ContactUs from './components/pages/ContactUs';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/our-team" component={OurTeam} />
            <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
    </App> )

export default Routes
