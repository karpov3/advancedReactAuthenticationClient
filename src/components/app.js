import React, { Component } from 'react';
import Header from './header';
import Signin from './auth/signin';
export default class App extends Component {
  render() {
    return (
      <div>
      <Signin />
      <Header />

      React simple starter</div>
    );
  }
}
