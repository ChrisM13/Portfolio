import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-materialize'
import './NavBar.css';

function onClick(event) {
  event.preventDefault();
  return (
    <Link to="/"></Link>
  )
}

const NavBar = (props) => {
  return (
    <Navbar className="black navbar" brand="" left fixed onClick={onClick}>    
      <ul>
        <li><Link to="/" className='NavBar-link Chris'>Chris Mosier</Link></li>
        <li><Link to="/work" className='NavBar-link'>Work</Link></li>
        <li><Link to="/resume" className='NavBar-link'>Resume</Link></li>
        <li><Link to="/about" className='NavBar-link'>About</Link></li>
      </ul>
    </Navbar>
  );
};

export default NavBar;