import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { Helmet } from "react-helmet";
import AppProvider from './components/AppProvider';
import AppContext from './app-context';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Terra Salon | Nashua, NH</title>
            <meta name="description" content="Terra is a full service salon
            located in Nashua, NH that is committed to providing earth friendly hair care services." />
            <link rel="canonical" href="http://www.terrasalonnh.com/" />
          </Helmet>

          <AppContext.Consumer>
            {(context) => (
              <div className="App">
                <NavBar context={ context } />
                {this.props.children}
                <Footer context={ context } />
              </div>
            )}
          </ AppContext.Consumer>
        </div>
      </AppProvider>
    );
  }
}

export default App;
