import React from 'react';
import { LocalPhone } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import Navbar from '../Navbar/Navbar';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.card}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <LocalPhone />
              {' '}
              <a href="tel:998993884635" target="_blank" rel="noreferrer">+998993884635</a>
            </li>
            <li className={styles.item}>
              <MailIcon />
              {' '}
              <a
                href="mailto:oybekjon.shamuratov@mail.ru"
                target="_blank"
                rel="noreferrer"
              >
                oybekjon.shamuratov@mail.ru
              </a>
            </li>
            <li className={styles.item}>
              <TelegramIcon />
              {' '}
              <a href="https://t.me/nightvolk" target="_blank" rel="noreferrer">@nightvolk</a>
            </li>
            <li className={styles.item}>
              <LinkedInIcon />
              {' '}
              <a href="https://www.linkedin.com/in/oybek-shamuratov-47bb66221/" target="_blank" rel="noreferrer">oybek-shamuratov</a>
            </li>
            <li className={styles.item}>
              <GitHubIcon />
              {' '}
              <a href="https://github.com/oybekdev1998" target="_blank" rel="noreferrer">oybekdev1998</a>
            </li>
            <li className={styles.item}>
              <DownloadIcon />
              {' '}
              <a href="file:/d:/Chrome/Резюме.pdf" target="_blank" rel="noreferrer">Download CV</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Contact;
