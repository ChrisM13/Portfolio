import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Resume from './components/Resume/Resume'
import Work from './components/Work/Work'
import About from './components/About/About'
import Extra from './components/Extra/Extra'
import database from './config/database'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: database
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <NavBar />
              <Switch>
                <Route path='/resume' component={Resume}/>
                <Route path='/work' render={(props) =>
                  <Work
                    projects={this.state.projects}
                    />
                  }/>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/extra' component={Extra}/>
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
