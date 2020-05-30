import React from 'react';
import Button from 'common/Button';
import styles from './ListFilter.module.css';

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
