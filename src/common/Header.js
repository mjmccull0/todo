import React from 'react';
import styles from './Header.module.css';

const Header = (props) => (
  <header className={styles.wrapper}>
    {props.children}
  </header>
)

export default Header;
