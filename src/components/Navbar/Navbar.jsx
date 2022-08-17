import React from 'react';
import home from '../../assets/home.png';
import skills from '../../assets/books.png';
import portfolio from '../../assets/cup.png';
import send from '../../assets/letter.png';

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
            Contact me
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
