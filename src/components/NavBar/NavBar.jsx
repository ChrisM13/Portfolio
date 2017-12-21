import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  return (
    <Navbar className="black navbar" brand='Chris Mosier' left fixed>
      <ul>
        <li><Link to="/about" className='NavBar-link'>About</Link></li>
        <li><Link to="/resume" className='NavBar-link'>Resume</Link></li>
        <li><Link to="/work" className='NavBar-link'>Work</Link></li>
      </ul>
    </Navbar>
  );
};

export default NavBar;