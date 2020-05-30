import React from 'react';
import styles from './MenuBar.module.css';


const MenuBar = (props = {}) => {
  return (
    <div className={styles.main_menu}>
      {props.children}
    </div>
  );
}

export default MenuBar; 
