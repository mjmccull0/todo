import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  const {active, label, className, children, ...other} = {...props};
  return (
    <button
      className={`
        ${styles.default}
        ${className ? styles[className] : ''}
        ${active ? styles.active : '' }
      `}
      {...other}
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
