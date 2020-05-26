import React, { useState } from 'react';
import Checkbox from './Checkbox';
import List from './List';
import styles from './Lists.module.css';

const Lists = (props = {lists: []}) => {

  if (props.lists.length === 0) {
    return null;
  }

  return (
    <ul className={styles.user_lists}>
      {props.lists.map(list => (
        <li key={list.id}>
          <List list={list} />
        </li>
      ))}
    </ul>
  );
}

export default Lists;
