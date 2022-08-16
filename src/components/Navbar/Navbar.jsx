/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import home from '../../assets/home.svg';
import skills from '../../assets/skills.svg';
import portfolio from '../../assets/portfolio.svg';
import send from '../../assets/send.svg';

import styles from './Navbar.module.css';

// eslint-disable-next-line react/prop-types
function Navbar({ navbarProps }) {
  return (
    <div className={styles.navBlock}>
      <div className={navbarProps ? styles.navbarDisplay : styles.navbar}>
        <div className={styles.items}>
          <span className={styles.item}>
            <img className={styles.img} src={home} alt="home" />
            Home
          </span>
          <span className={styles.item}>
            <img className={styles.img} src={portfolio} alt="home" />
            Portfolio
          </span>
          <span className={styles.item}>
            <img className={styles.img} src={skills} alt="home" />
            Skills
          </span>
          <span className={styles.item}>
            <img className={styles.img} src={send} alt="home" />
            Send me
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
