import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import { SelectLists, Grid } from 'list/Lists';
import SearchButton from 'common/SearchButton';
import MenuBar from 'common/MenuBar';
import Header from 'common/Header';
import FooterBar from 'common/FooterBar';
import Button from 'common/Button';

const ListSelectMode = (props) => {
  console.log(props);
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
      {props.grid
        ? <Grid
            lists={state.lists}
            selectedLists={selectedLists}
            onSelect={(event) => select(event)}
            update={update}
            renameFormOpen={renameFormOpen}
            onListClick={(event) => select(event)}
          />
        : <List
            lists={state.lists}
            selectedLists={selectedLists}
            onSelect={(event) => select(event)}
            update={update}
            renameFormOpen={renameFormOpen}
            onListClick={(event) => select(event)}
          />
      }
      <ListSelectModeFooter
        selectedLists={selectedLists}
        setRenameFormOpen={(value) => setRenameFormOpen(value)}
        onDelete={remove}
      />
    </>
  );
}

const List = (props) => {
  return (
    <>
      <SelectLists
        lists={props.lists}
        selectedLists={props.selectedLists}
        onSelect={(event) => props.onSelect(event)}
        onRename={props.update}
        renameFormOpen={props.renameFormOpen}
        onListClick={(event) => props.onListClick(event)}
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
          disabled={props.selectedLists.length === 1 ? false : true}
         />
        <Button
          className="warn"
          label="Delete"
          onClick={props.onDelete}
          disabled={props.selectedLists.length > 0 ? false : true}
        />
      </FooterBar>
    </>
  );
}

export default ListSelectMode;
