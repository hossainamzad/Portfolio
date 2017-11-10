import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './App.css';
import 'bulma/css/bulma.css';

// to import the nav page and display it on the page.
import Navigation from './components/Nav';
import Footer from './components/Footer';
import { Router, Route, Switch } from 'react-router';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navigation />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
