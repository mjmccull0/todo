import React, { useState } from 'react';
import TextInput from 'common/TextInput';
import Button from 'common/Button';
import Popover from 'common/Popover';

const RenameListForm = ({list, update, cancel}) => {
  const [listName, setListName] = useState(list.name);

  const handleListRename = (event) => {
    setListName(event.target.value);
  }

  const rename = (event) => {
    update({...list, name: listName});
  }

  return (
    <Popover>
      <TextInput
        label="Name of Todo List"
        value={listName}
        onChange={handleListRename}
        autoFocus
      />
      <div className="actions two">
        <Button
          className="action"
          label="Cancel"
          onClick={cancel}
        />
        <Button className="action" label="Rename" onClick={rename} />
      </div>
    </Popover>
  );
}

export default RenameListForm;
