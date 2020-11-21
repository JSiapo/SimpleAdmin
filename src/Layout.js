import React from 'react';
import NavBar from './components/widgets/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <p>Menu</p>
      <main>{children}</main>
    </>
  );
};

export default Layout;
