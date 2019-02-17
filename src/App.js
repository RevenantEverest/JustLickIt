import React, { Component } from 'react';
import { BroswerRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Component Imports
import HomePage from './components/HomePage/HomePage';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App_Contents">
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
