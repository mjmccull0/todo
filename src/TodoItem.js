import React, { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import Priority from './Priority';
import DueDate from './DueDate';
import ArrowButton from './ArrowButton';
import styles from './TodoItem.module.css';
import './TodoItem.css';

const TodoItem = (props) => {
  const nodeRef = React.useRef(null);
  const [name, setName] = useState(props.name);
  const [complete, setComplete] = useState(props.complete);
  const [dueDate, setDueDate] = useState(props.dueDate);
  const [notes, setNotes] = useState(props.notes);
  const [priority, setPriority] = useState(props.priority);
  const [expandDetail, setExpandDetail] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleComplete = () => {
    setComplete(!complete);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeNotes = (event) => {
    setNotes(event.target.value);
  }

  const toggleDetails = () => {
    setExpanded(!expanded);
    setExpandDetail(!expandDetail);
  }

  return (
    <>
      <div className={expanded ? 'open' : 'close'}>
      <div className={styles.todoItem} key={props.id}>
        <div className={styles.name}>
          <Button
            label="&#9776;"
            className={styles.dragIcon}
            onClick={toggleDetails}
          />
          <Checkbox
            toggleCheckbox={toggleComplete}
            checked={complete}
          />
          <div className={styles.name_input_wrapper}>
            <input type="text"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <ArrowButton
            direction={expanded ? 'up' : 'down'}
            onClick={toggleDetails}
          />
        </div>
        <div className={styles.details} ref={nodeRef}>
          <div className={styles.notes}>
            <label>
              Notes
            </label>
            <textarea value={notes} onChange={handleChangeNotes} />
          </div>
          <div>
            <DueDate />
            <Priority />
            <div className={styles.todo_actions}>
              <Button label="Delete" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default TodoItem;
