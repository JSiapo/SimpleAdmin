import React from 'react';
import NavBar from './components/widgets/NavBar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
