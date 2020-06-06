import React, { useState } from 'react';
import TextInput from 'common/TextInput';
import Button from 'common/Button';
import Popover from 'common/Popover';

const RenameListForm = (props) => {
  const [listName, setListName] = useState(props.list.name);

  const handleListRename = (event) => {
    setListName(event.target.value);
  }

  const rename = (event) => {
    props.rename({...props.list, name: listName});
  }

  return (
    <Popover>
      <TextInput
        label="Name of Todo List"
        value={listName}
        onChange={handleListRename}
      />
      <div className="actions two">
        <Button className="action" label="Cancel" onClick={props.cancel} />
        <Button className="action" label="Rename" onClick={rename} />
      </div>
    </Popover>
  );
}

export default RenameListForm;
