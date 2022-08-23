import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Social from '../Social/Social';
import Example from '../Typical/Typical';
import photo from '../../assets/myphoto.jpg';

import styles from './Home.module.css';
import MainLayout from '../../layouts/MainLayout';

function Home() {
  const [navbar, setNavbar] = useState(false);
  const clickHandler = () => {
    setNavbar(!navbar);
  };
  return (
    <div className={navbar ? styles.homeOpacity : styles.home}>
      <NavbarMenu handler={clickHandler} navbarProps={navbar} />
      <Navbar navbarProps={navbar} />
      <img className={styles.img} src={photo} alt="my" />
      <h1 className={styles.title}>Oybek Shamuratov</h1>
      <h2 className={styles.job}>React Developer</h2>
      <h3 className={styles.subTitle}>
        Working with technologies such as
        <span className={styles.skills}>
          <Example />
        </span>
      </h3>
      <Social />
    </div>
  );
}

export default Home;
