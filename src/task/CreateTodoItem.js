import React, { useState } from 'react';
import TextInput from 'common/TextInput';
import styles from './CreateTodoItem.module.css';

const CreateTodoItem = (props) => {
  const [todoName, setTodoName] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        setTodoName('');
        props.onEnterKeyPress(todoName);
    }
  }
  const handleChangeName = (event) => {
    setTodoName(event.target.value);
  }

  return (
    <>
      <div className={styles.createTodoItem}>
        <TextInput
          label='＋'
          value={todoName}
          className={styles.addTodoItemInput}
          placeholder="New task..."
          onChange={handleChangeName}
          onKeyPress={handleKeyPress}
        />
      </div>
    </>
  );
}

export default CreateTodoItem;
