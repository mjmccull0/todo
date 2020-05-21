import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from './Button';
import Checkbox from './Checkbox';
import Priority from './Priority';
import DueDate from './DueDate';
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
    setExpandDetail(!expandDetail);
  }

  return (
    <>
      <div className={styles.todoItem} key={props.id}>
        <div className={styles.name}>
          <Checkbox
            toggleCheckbox={toggleComplete}
            checked={complete}
          />
          <div>
            <input type="text"
              value={name}
              onChange={handleChangeName}
            />
          </div>
          <Button label="toggle" onClick={toggleDetails} />
        </div>
        <CSSTransition
          nodeRef={nodeRef}
          in={expandDetail}
          timeout={200}
          classNames="list-transition"
          unmountOnExit
          appear
        >
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
        </CSSTransition>
      </div>
    </>
  );
}

export default TodoItem;
