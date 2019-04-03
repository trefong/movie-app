import React, { Component } from 'react';
import { Route, Router } from 'react-router'
import history from './history';
import MoviePage from './movie';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/movie' component={MoviePage} />
        </div>
      </Router>

    );
  }
}

export default App;
