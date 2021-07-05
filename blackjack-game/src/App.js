import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Hand from './Hand';
import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super()

    this.state = {
      drawnHand: '',
    }
  }

  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  };
};

export default App

