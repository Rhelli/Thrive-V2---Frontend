import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import AuthNavbar from '../AuthNavbar/AuthNavbar';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <div className={style.Navbar}>
    <nav>
      <div>
        <MainNavbar />
        <AuthNavbar />
      </div>
    </nav>
  </div>
);

export default Navbar;
