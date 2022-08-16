/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import menu from '../../assets/menu.svg';
import cancel from '../../assets/cancel.svg';
import styles from './NavbarMenu.module.css';

// eslint-disable-next-line react/prop-types
function NavbarMenu({ handler, navbarProps }) {
  return (
    <div>
      <img
        onMouseDown={handler}
        className={navbarProps ? styles.menuTransform : styles.menuImg}
        src={navbarProps ? cancel : menu}
        alt="menu"
      />
    </div>
  );
}

export default NavbarMenu;
