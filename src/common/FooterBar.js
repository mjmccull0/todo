import React from 'react';
import styles from './FooterBar.module.css';

const FooterBar = (props) => {
  return (
    <div className={styles.footer}>
      {props.children}
    </div>
  );
}

export default FooterBar;
