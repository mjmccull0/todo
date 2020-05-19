import React, { useState } from 'react';
import Checkbox from './Checkbox';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [name, setName] = useState(props.name);
  const [complete, setComplete] = useState(props.complete);

  const toggleComplete = () => {
    setComplete(!complete);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  return (
    <>
      <div className="todo-item" key={props.id}>
        <Checkbox
          toggleCheckbox={toggleComplete}
          checked={complete}
        />
        <input type="text"
          value={name}
          onChange={handleChangeName}
        />
      </div>
    </>
  );
}

export default TodoItem;
