import React from 'react';
import Button from 'common/Button';
import DatePicker from 'common/DatePicker';
import { today, tomorrow } from 'util/date';
import styles from './DueDate.module.css';

const DueDate = (props) => (
  <div className="due-date">
    <label>
      Due Date
    </label>
    <div className={styles.date_picker}>
      <Button onClick={props.onChange} value={today()} label="Today" />
      <Button onClick={props.onChange} value={tomorrow()} label="Tomorrow" />
      <DatePicker {...props} />
    </div>
  </div>
)

export default DueDate;
