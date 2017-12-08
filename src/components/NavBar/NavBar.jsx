import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  return (
    <div className='NavBar'>
      <Link to="/resume" className='NavBar-link'>Resume</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/work" className='NavBar-link'>Work</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/" className='NavBar-link'>Chris Mosier</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/about" className='NavBar-link'>About</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/extra" className='NavBar-link'>Extra</Link>
    </div>
  );
};

export default NavBar;