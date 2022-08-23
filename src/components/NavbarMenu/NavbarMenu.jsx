import React from 'react';
import menu from '../../assets/menu.svg';
import cancel from '../../assets/cancel.svg';
import styles from './NavbarMenu.module.css';

function NavbarMenu({ handler, navbarProps }) {
  return (
    <div>
      <img
        onClick={handler}
        className={navbarProps ? styles.menuTransform : styles.menuImg}
        src={navbarProps ? cancel : menu}
        alt="menu"
      />
    </div>
  );
}

export default NavbarMenu;
