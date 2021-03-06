import React from 'react';
import styles from './ArrowButton.module.css'

const ArrowButton = ({direction, ...props}) => {
  return (
    <button className={`${styles.wrapper} ${styles[direction]}`} {...props}>
      <i className={`${styles.arrow} ${styles[direction]}`}></i>
    </button>
  );
}

export default ArrowButton;
