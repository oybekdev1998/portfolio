import React from 'react';
import telegram from '../../assets/telegram-app.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import styles from './Social.module.css';

function Social() {
  return (
    <div className={styles.socials}>
      <a href="https://t.me/nightvolk" target='_blank'><img className={styles.telegram} src={telegram} alt="telegram" /></a>
      <a href="https://github.com/oybekdev1998" target="_blank"><img className={styles.telegram} src={github} alt="github" /></a>
      <a href='https://www.linkedin.com/in/oybek-shamuratov-47bb66221/' target="_blank"><img className={styles.telegram} src={linkedin} alt="linkedin" /></a>

    </div>
  );
}

export default Social;
