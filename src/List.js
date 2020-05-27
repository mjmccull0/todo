import React, { useState } from 'react';
import Checkbox from './Checkbox';
import styles from './List.module.css';

const List = ({list, onSelect, ...props}) => {

  const toggleComplete = () => {
    // Toggle todo list as done.
    console.log(list);
  }

  return(
    <div className={styles.list}>
      <Checkbox
        toggleCheckbox={toggleComplete}
        checked={list.complete}
      />
      <div className={styles.name_wrapper}
        onClick={() => onSelect(list.id)}
      >
        {list.name}
      </div>
    </div>
  )
}

export default List;
