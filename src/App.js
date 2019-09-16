import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/* receive all of routers  */}
      </div>
    );
  }
}

export default App;
