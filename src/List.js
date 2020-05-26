import React, { useState } from 'react';
import Checkbox from './Checkbox';
import styles from './List.module.css';

const List = ({list, ...props}) => {

  const toggleComplete = () => {
    // Toggle todo list as done.
    console.log(list);
  }

  const setActiveList = () => {
    console.log(list);
  }


  return(
    <div className={styles.list}>
      <Checkbox
        toggleCheckbox={toggleComplete}
        checked={list.complete}
      />
      <div className={styles.name_wrapper} onClick={setActiveList}>
        {list.name}
      </div>
    </div>
  )
}

export default List;
