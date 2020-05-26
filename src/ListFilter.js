import React from 'react';
import styles from './ListFilter.module.css';
import Button from './Button';

const ListFilter = (props = {}) => {
  return (
    <>
      <div className={styles.list_filter}>
        <Button label="Lists" />
        <Button label="Today" />
        <Button label="Scheduled" />
      </div>
      {props.children}
    </>
  );
}

export default ListFilter;
