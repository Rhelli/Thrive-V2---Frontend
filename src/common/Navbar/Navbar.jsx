import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import AuthNavbar from '../AuthNavbar/AuthNavbar';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <div>
    <nav>
      <div>
        <div className={styles.navbarBrand} />
        <MainNavbar />
        <AuthNavbar />
      </div>
    </nav>
  </div>
);

export default Navbar;
