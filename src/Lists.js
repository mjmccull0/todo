import React from 'react';
import styles from './Lists.module.css';

const Lists = (props = {lists: []}) => {
  if (props.lists.length === 0) {
    return null;
  }

  return (
    <ul className={styles.user_lists}>
      {props.lists.map(list => (
        <li key={list.id}>
          <div className={styles.list}>
            {list.name}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Lists;
