import React, { useState } from 'react';
import Checkbox from './Checkbox';
import styles from './Lists.module.css';

const Lists = (props = {lists: []}) => {

  if (props.lists.length === 0) {
    return null;
  }

  const toggleComplete = () => {
    // Toggle todo list as done.
  }

  return (
    <ul className={styles.user_lists}>
      {props.lists.map(list => (
        <li key={list.id}>
          <div className={styles.list}>
            <Checkbox
              toggleCheckbox={toggleComplete}
              checked={list.complete}
            />
            <div className={styles.name_wrapper}>
              {list.name}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Lists;
