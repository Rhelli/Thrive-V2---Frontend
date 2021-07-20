import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import AuthNavbar from '../AuthNavbar/AuthNavbar';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <div className={styles.navbarBrand}></div>
        <MainNavbar />
        <AuthNavbar />
      </div>
    </nav>
  </div>
);

export default Navbar;
