import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  console.log('NavBar');
  return (
    <>
      <h1>
        NavBar
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
      </h1>
    </>
  );
};

export default NavBar;
