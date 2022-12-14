import React from 'react';
import Navbar from '../Navbar/Navbar';
import Example from '../Typical/Typical';
import photo from '../../assets/wolf.svg';

import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <img className={styles.img} src={photo} alt="wolf" />
      <h1 className={styles.title}>Oybek Shamuratov</h1>
      <h2 className={styles.job}>React Developer</h2>
      <h3 className={styles.subTitle}>
        Working with technologies such as
        <span className={styles.skills}>
          <Example />
        </span>
      </h3>
    </div>
  );
}

export default Home;
