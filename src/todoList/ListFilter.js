import React from 'react';
import Button from 'common/Button';
import styles from './ListFilter.module.css';

const ListFilter = (props = {}) => {
  return (
    <>
      <div className={styles.list_filter}>
        {props.children}
      </div>
    </>
  );
}

export default ListFilter;
