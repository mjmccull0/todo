import React from 'react';
import ListFilter from './ListFilter';
import Button from './Button';
import CreateList from './CreateList';
import styles from './MainMenu.module.css';


const MainMenu = (props = {}) => {
  return (
    <div className={styles.main_menu}>
      <div>
        <CreateList />
      </div>
      <ListFilter />
      <div>
      </div>
    </div>
  );
}

export default MainMenu; 
