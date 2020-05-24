import '../styles/global.css'
import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import UserContext from '../components/UserContext';

import io from "socket.io-client";
const GLOBAL_BACKEND_CONSTANTS = require('../styles/backend_constants.js')
const ENDPOINT = GLOBAL_BACKEND_CONSTANTS.ENDPOINT // backend server endpoint

/*
  This App component is the top-level component which will be common across 
	all the different pages. You can use this App component to keep state when 
 	navigating between pages, for example.
 */

 // Extending default app in order to persist user username 
class AppWithState extends App {
  // App records username throughout navigation 
  state = {
    user: null,
    socket: io(ENDPOINT)
  };
  
  // When component loads, lets it access user parameter
  componentDidMount = () => {
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({
        user
      });
    }
  };

  // Defines functions to add and remove username
  signIn = (username) => {
    localStorage.setItem('user', username);
    this.setState(
      {
        user: username
      }
    );
    console.log("your user name is ", username)
  };

  signOut = () => {
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    Router.push('/index');
  };

  render() {
    const { Component, pageProps } = this.props;
    return(
    // Wraps everything inside this big parent context
    <UserContext.Provider value={{ 
      user: this.state.user, 
      signIn: this.signIn, 
      signOut: this.signOut,
      socket: this.state.socket 
    }}>
      <Component {...pageProps} />
    </UserContext.Provider>);
  }
}

export default AppWithState;

