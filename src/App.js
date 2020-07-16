import React, { Component } from 'react';
import './App.css'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog';


class App extends Component {
  render() {
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            <Home />
          }/>
          <Route exact path='/blog' render={() =>
            <Blog />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
