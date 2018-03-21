import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Register from './Register.js';
import Login from './Login.js';
import Todo from './Todo.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-router-dom/Switch';
 
export default  class App extends Component {
  constructor(props) {
    super(props);
 
    
  }
  render() {
    return (
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/todo' component={Todo}/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}