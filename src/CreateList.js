import React, { useState } from 'react';
import TextInput from './TextInput';
import styles from './CreateList.module.css';
import Button from './Button';


const CreateList = () => {
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
    // Implement create new list.
    closeCreateListForm();
  }

  const closeCreateListForm = () => {
    setListFormOpen(false);
  }

  return (
    <>
      <Button
        className={styles.create_list}
        label="New List"
        onClick={newList}
      />
      { listFormOpen &&
        <div className={styles.create_list_form}>
          <TextInput label="List Name" onChange={handleListName} />
          <div className={styles.actions}>
            <Button label="Cancel" onClick={cancel} />
            <Button label="Create List" onClick={create} />
          </div>
        </div>
      }
    </>
  );
}

export default CreateList;
