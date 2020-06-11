import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import Lists from 'list/Lists';
import SearchButton from 'common/SearchButton';
import MenuBar from 'common/MenuBar';
import Header from 'common/Header';
import FooterBar from 'common/FooterBar';
import Button from 'common/Button';

const ListSelectMode = (props) => {
  const {state, dispatch} = useContext(TodoContext);
  const [renameFormOpen, setRenameFormOpen] = useState(false);
  const [selectedLists, setSelectedLists] = useState([...props.selectedList]);

  const select = (list) => {
    let selected = selectedLists;
    if (selectedLists.includes(list.id)) {
      selected = selectedLists.filter(id => id !== list.id);
    } else {
      selected = [...selected, list.id];
    }
    setSelectedLists(selected);
  }

  const remove = () => {
    dispatch({
      type: 'DELETE_LIST',
      payload: selectedLists
    });
  }

  const update = (list) => {
    setRenameFormOpen(false);
    dispatch({
      type: 'UPDATE_LIST',
      payload: list 
    });
  }

  return (
    <>
      <ListSelectModeMenuBar {...props} />
      <Lists
        lists={state.lists}
        selectedLists={selectedLists}
        onSelect={(event) => select(event)}
        onRename={update}
        renameFormOpen={renameFormOpen}
        onListClick={(event) => select(event)}
      />
      <ListSelectModeFooter
        selectedLists={selectedLists}
        setRenameFormOpen={(value) => setRenameFormOpen(value)}
        onDelete={remove}
      />
    </>
  );
}

const ListSelectModeMenuBar = (props) => {
  return (
    <MenuBar
      center={
        <Header>Click a task list to select</Header>
      }
      right={
        <>
          <Button
            className="checkIcon"
            onClick={props.exitListSelectMode}
          />
          <SearchButton />
          <Button
            label="Cancel"
            onClick={props.exitListSelectMode}
          />
        </>
      }
    />
  )
}

const ListSelectModeFooter = (props) => {
  return (
    <>
      <FooterBar>
        <Button
          label="Rename"
          onClick={() => props.setRenameFormOpen(true)}
          disabled={props.selectedLists > 1 ? false : true}
         />
        <Button
          className="warn"
          label="Delete"
          onClick={props.onDelete}
          disabled={props.selectedLists < 1 ? true : false}
        />
      </FooterBar>
    </>
  );
}

export default ListSelectMode;
