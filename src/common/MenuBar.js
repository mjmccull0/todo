import React from 'react';
import styles from './MenuBar.module.css';


const MenuBar = (props = {}) => {
  return (
    <>
      <div className={styles.main_menu}>
        <div>
          {props.left}
        </div>
        <div className={styles.center}>
          {props.center}
        </div>
        <div>
          {props.right}
        </div>
      </div>
      {props.children}
    </>
  );
}

export default MenuBar; 
