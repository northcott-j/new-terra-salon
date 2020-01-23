import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Helmet } from "react-helmet";
import AppProvider from './components/AppProvider';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Terra Salon | Nashua, NH</title>
            <meta name="description" content="Terra is a full service salon
            located in Nashua, NH that is committed to providing earth friendly hair care services." />
            <link rel="canonical" href="http://www.terrasalonnh.com/" />
          </Helmet>
          <NavBar />
          {this.props.children}
        </div>
      </AppProvider>
    );
  }
}

export default App;
