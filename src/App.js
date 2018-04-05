import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoShow from './components/TodoShow'
import TodoShowList from './components/TodoShowList'
import TodoLogic from './containers/TodoLogic'

import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
           <TodoShow/>
           <TodoShowList/>

        { /*  <Router> 
              <div style={{float:'center'}} > 
                <ul style={{listStyle:'none'}} >
                  <li style={{display:'inline-block',paddingRight:20 }}>   
                  <Link to="/" > Home </Link>  </li>
                  <li style={{display:'inline-block',paddingRight:20 }}>   
                  <Link to="" > login page </Link>  </li> 
                </ul>
                <Switch>
                      <Route path="" component={TodoLogic} /> 
                </Switch>
              </div>
           </Router> */}
      </div> 

      
    );
  }
}

export default App;



