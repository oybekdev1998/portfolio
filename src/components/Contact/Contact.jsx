import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import { LocalPhone } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <MainLayout />
      <div className={styles.card}>
        <ul className={styles.items}>
          <li className={styles.item}><LocalPhone/> <a href='tel:998993884635'>+998993884635</a></li>
          <li className={styles.item}><MailIcon/> <a href='mailto:oybekjon.shamuratov@mail.ru'>oybekjon.shamuratov@mail.ru</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Contact;