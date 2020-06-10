import React, { useContext, useRef, useState } from 'react';
import Button from 'common/Button';
import Checkbox from 'common/Checkbox';
import ArrowButton from 'common/ArrowButton';
import Priority from './Priority';
import DueDate from './DueDate';
import styles from './TodoItem.module.css';
import './TodoItem.css';

import { TodoContext } from 'TodoContext';

const TodoItem = ({item}) => {
  const {dispatch} = useContext(TodoContext);
  const nodeRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const toggleComplete = () => {
    dispatch({
      type: 'UPDATE_LIST_ITEM',
      payload: {...item, complete: !item.complete} 
    });
  }

  const handleUpdate = prop => (event) => {
    dispatch({
      type: 'UPDATE_LIST_ITEM',
      payload: {...item, [prop]: event.target.value}
    });
  }

  const remove = () => {
    dispatch({
      type: 'DELETE_LIST_ITEM',
      payload: item 
    });
  }

  const toggleDetails = () => {
    setExpanded(!expanded);
  }


  return (
    <>
      <div className={expanded ? 'open' : 'close'}>
        <div className={`
            ${styles.todoItem}
            ${styles[item.priority]}
            ${item.complete ? styles.complete : ''}
          `}
           key={item.id}
        >
          <div className={styles.name}>
            <Button
              label="&#9776;"
              className="dragIcon"
              onClick={toggleDetails}
            />
            <Checkbox
              toggleCheckbox={toggleComplete}
              checked={item.complete}
            />
            <div className={styles.name_input_wrapper}>
              <input type="text"
                value={item.name}
                onChange={handleUpdate('name')}
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
              <textarea value={item.notes} onChange={handleUpdate('notes')} />
            </div>
            <div>
              <DueDate value={item.dueDate} onChange={handleUpdate('dueDate')} />
              <Priority
                priority={item.priority}
                onChange={handleUpdate('priority')}
              />
              <div className={styles.todo_actions}>
                <Button className="warn" label="Delete" onClick={remove} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
