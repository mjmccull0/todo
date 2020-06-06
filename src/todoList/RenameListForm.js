import React, { useState } from 'react';
import TextInput from 'common/TextInput';
import Button from 'common/Button';
import styles from './RenameListForm.module.css';

const RenameListForm = (props) => {
  const [listName, setListName] = useState(props.list.name);

  const handleListRename = (event) => {
    setListName(event.target.value);
  }

  const rename = (event) => {
    props.rename({...props.list, name: listName});
  }

  return (
    <>
      <div className={styles.rename_list_form}>
        <TextInput
          label="Name of Todo List"
          value={listName}
          onChange={handleListRename}
        />
        <div className={styles.actions}>
          <Button label="Cancel" onClick={props.cancel} />
          <Button label="Rename" onClick={rename} />
        </div>
      </div>
    </>
  );
}

export default RenameListForm;
