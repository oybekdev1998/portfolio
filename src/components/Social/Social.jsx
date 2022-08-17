import React from 'react';
import telegram from '../../assets/telegram-app.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import styles from './Social.module.css';

function Social() {
  return (
    <div className={styles.socials}>
      <a href="https://google.com"><img className={styles.telegram} src={telegram} alt="telegram" /></a>
      <a href="http://google.com"><img className={styles.telegram} src={github} alt="github" /></a>
      <a href="http://google.com"><img className={styles.telegram} src={linkedin} alt="linkedin" /></a>

    </div>
  );
}

export default Social;
