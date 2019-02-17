import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faUser, faPhone, faArrowCircleRight, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Component Imports
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Footer from './components/Footer';

library.add(faEnvelope, faUser, faPhone, faArrowCircleRight, faGlobeAmericas);
library.add(fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App_Contents">
            <NavBar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
