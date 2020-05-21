import React from 'react';
import Button from './Button';
import DatePicker from './DatePicker';
import styles from './DueDate.module.css';

const DueDate = (props) => (
  <div className="due-date">
    <label>
      Due Date
    </label>
    <div className={styles.date_picker}>
      <Button label="Today" />
      <Button label="Tomorrow" />
      <DatePicker />
    </div>
  </div>
)

export default DueDate;
