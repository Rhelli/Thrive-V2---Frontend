import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import AuthNavbar from '../AuthNavbar/AuthNavbar';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <h1>Navbar</h1>
        <MainNavbar />
        <AuthNavbar />
      </div>
    </nav>
  </div>
);

export default Navbar;
