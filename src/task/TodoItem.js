import React, { useContext, useRef, useState } from 'react';
import Button from 'common/Button';
import Checkbox from 'common/Checkbox';
import Priority from './Priority';
import DueDate from './DueDate';
import styles from './TodoItem.module.css';
import './TodoItem.css';

import { TodoContext } from 'TodoContext';
import Collapsible from 'common/Collapsible';

const TodoItem = ({item, listName, dueDate, draggable}) => {
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
    <TodoContainer>
      <div className={`
          ${styles.todoItem}
          ${styles[item.priority]}
          ${item.complete ? styles.complete : ''}
        `}
         key={item.id} 
      >

        <Collapsible
          header={
            <>
              <Todo
                item={item}
                expanded={expanded}
                toggleComplete={toggleComplete}
                handleUpdate={handleUpdate}
                toggleDetails={toggleDetails}
                className={`
                  ${draggable ? styles.draggable : ''}
                `}
              />
              {dueDate &&
                <>
                  <Due item={item} />
                </>
              }
              {listName &&
                  <>
                    <ListName item={item} /> 
                  </>
              }
            </>
          }
          section={
            <>
              <Details nodeRef={nodeRef}>
                <Notes
                  item={item}
                  handleUpdate={handleUpdate}
                />
                <DueDate
                  value={item.dueDate}
                  onChange={handleUpdate('dueDate')}
                />
                <Priority
                  priority={item.priority}
                  onChange={handleUpdate('priority')}
                />
                <Delete remove={remove} />
              </Details>
            </>
          }
        >
        </Collapsible> 
      </div>
    </TodoContainer>
    </>
  );
}

const Due = ({item}) => (
  <div className={styles.due}>
    {item.dueDate}
  </div>
)

const ListName = ({item}) => {
  const {state} = useContext(TodoContext);
  const list = state.lists.find(list => list.id === item.listId);
  try {
    return (
      <div className={styles.list_name}>
        {list.name}
      </div>
    );
  } catch {
    return null;
  }
}

const Notes = ({item, handleUpdate}) => (
  <div className={styles.notes}>
    <label>
      Notes
    </label>
    <textarea value={item.notes} onChange={handleUpdate('notes')} />
  </div>
)
const Details = ({children, nodeRef}) => (
  <div className={styles.details} ref={nodeRef}>
    {children}
  </div>
)

const Delete = ({remove}) => (
  <div className={styles.todo_actions}>
    <Button className="warn" label="Delete" onClick={remove} />
  </div>
)
const Todo = ({item, expanded, toggleComplete, handleUpdate, toggleDetails, className}) => (
  <div className={`${styles.name} ${className}`}>
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
  </div>
)

const TodoContainer = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}

export {TodoItem, TodoContainer};
