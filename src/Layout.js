import React from 'react';
import NavBar from './components/widgets/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <p>
        Menu
        <main>{children}</main>
      </p>
    </>
  );
};

export default Layout;
