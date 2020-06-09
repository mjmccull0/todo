import React, { useState } from 'react';
import Button from 'common/Button';
import TextInput from 'common/TextInput';
import styles from './CreateList.module.css';


const CreateList = ({createTodoList, props}) => {
  const [listName, setListName] = useState(null);
  const [listFormOpen, setListFormOpen] = useState(false);

  const handleListName = (event) => {
    setListName(event.target.value);
  }

  const newList = () => {
    setListFormOpen(true);
  }

  const cancel = () => {
    closeCreateListForm();
  }

  const create = () => {
    createTodoList(listName);
    closeCreateListForm();
  }

  const closeCreateListForm = () => {
    setListFormOpen(false);
  }

  return (
    <div>
      <Button
        className={styles.create_list}
        label="New List"
        onClick={newList}
      />
      { listFormOpen &&
        <div className={styles.create_list_form}>
          <TextInput label="List Name" onChange={handleListName} />
          <div className="actions two">
            <Button label="Cancel" onClick={cancel} />
            <Button label="Create List" onClick={create} />
          </div>
        </div>
      }
    </div>
  );
}

export default CreateList;
