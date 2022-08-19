import React from 'react';
import Home from '../Home/Home';
import home from '../../assets/home.png';
import skills from '../../assets/books.png';
import portfolio from '../../assets/cup.png';
import send from '../../assets/letter.png';
import { Link} from 'react-router-dom';
import styles from './Navbar.module.css';

// eslint-disable-next-line react/prop-types
function Navbar({ navbarProps }) {

  return (
      <div className={styles.navBlock}>
        <div className={navbarProps ? styles.navbarDisplay : styles.navbar}>
          <div className={styles.items}>
            <Link to="/" onClick={() => setInProp(!inProp)}>
              <span className={styles.item}>
                <img className={styles.img} src={home} alt="home" />
                Home
              </span>
            </Link>
            <Link to="/portfolio" >
            <span className={styles.item}>
              <img className={styles.img} src={portfolio} alt="home" />
              Portfolio
            </span>
            </Link>
            <Link to='/skills'>
            <span className={styles.item}>
              <img className={styles.img} src={skills} alt="home" />
              Skills
            </span>
            </Link>
            <Link to='/contact'>
            <span className={styles.item}>
              <img className={styles.img} src={send} alt="home" />
              Contact me
            </span>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
