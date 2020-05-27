import React from 'react';
import ListFilter from './ListFilter';
import Button from './Button';
import CreateList from './CreateList';
import styles from './MenuBar.module.css';


const MenuBar = (props = {}) => {
  return (
    <div className={styles.main_menu}>
      {props.children}
    </div>
  );
}

export default MenuBar; 
