import React from 'react';
import styles from 'common/Popover.module.css';

const Popover = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.children}>
        {props.children}
      </div>
    </div>
  );
}

export default Popover;
