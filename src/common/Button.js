import React from 'react';
import styles from './Button.module.css';

const Button = ({label, className, ...props} = {}) => {
  return (
    <button className={`${styles.default} ${styles[className]}`} {...props}>
      {label}
    </button>
  );
}

export default Button;
