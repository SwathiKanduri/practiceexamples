import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoShow from './components/TodoShow'
import TodoShowList from './components/TodoShowList'

class App extends Component {
  render() {
    return (
      <div className="App">
            <TodoShow/>
            <TodoShowList/>
      </div>
    );
  }
}

export default App;
