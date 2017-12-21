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
import database from './config/database'
import Typed from 'typed.js'
import $ from 'jquery'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: database
    }
  }
  componentDidMount() {
    $(function(){
      $("#typedTop").typed({
        strings: ["Hello!"],
        typeSpeed: 50,
        showCursor: false
      });
    });
    $(function(){
      $("#typedBottom").typed({
        strings: ["I'm a full-stack ^500 web developer."],
        typeSpeed: 100,
        startDelay: 1500,
        showCursor: false
      });
    });
    
    // $("#typedTop").typed({
    //   strings: ["Hello!"],
    //   typeSpeed: 50,
    //   showCursor: false
    // })
    
    // $("#typedBottom").typed({
    //   strings: ["I'm a full-stack ^500 web developer."],
    //   typeSpeed: 100,
    //   startDelay: 1500,
    //   showCursor: false
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
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
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
