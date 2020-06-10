import React from 'react';
import styles from './MenuBar.module.css';


const MenuBar = (props = {}) => {
  return (
    <>
      <div className={styles.main_menu}>
        <div className={styles.left}>
          {props.left}
        </div>
        <div className={styles.center}>
          {props.center}
        </div>
        <div className={styles.right}>
          {props.right}
        </div>
      </div>
      {props.children}
    </>
  );
}

export default MenuBar; 
