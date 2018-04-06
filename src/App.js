import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoShow from './components/TodoShow'
import TodoShowList from './components/TodoShowList'
import TodoLogic from './containers/TodoLogic'

import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator';
// import CalcLogic from './containers/CalcLogic'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Calculator/>
      </div> 

      
    );
  }
}

export default App;



