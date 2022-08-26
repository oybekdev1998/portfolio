import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Social from '../Social/Social';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navBlock}>
      <div className={styles.navbar}>
        <div className={styles.items}>
          <Link to="/">
            <span className={styles.item}>
              <BusinessCenterIcon className={styles.portfolioIcon} />
              Portfolio
            </span>
          </Link>
          <Link to="/portfolio">
            <span className={styles.item}>
              Projects
            </span>
          </Link>
          <Link to="/skills">
            <span className={styles.item}>
              Skills
            </span>
          </Link>
          <Link to="/contact">
            <span className={styles.item}>
              Contacts
            </span>
          </Link>
        </div>
        <Social />
      </div>
    </div>
  );
}

export default Navbar;
