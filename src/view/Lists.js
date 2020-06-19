import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import { ListView, GridView, ListMenuBar, ListSelectModeFooter } from 'list/List';
import Search from 'list/Search';

const Lists = (props) => {
  const DISPLAY = { list: ListView, grid: GridView };
  const {dispatch} = useContext(TodoContext);
  const [selectedLists, setSelectedLists] = React.useState([]);
  const [search, setSearch] = useState(false);
  const [editId, setEditId] = useState(null);
  const [query, setQuery] = useState('');
  const [selectMode, setSelectMode] = useState(false);
  
  const refresh = () => {
    setSelectMode(false);
    setSelectedLists([]);
    setEditId(null);
  }

  const update = (list) => {
    refresh();
    dispatch({
      type: 'UPDATE_LIST',
      payload: list
    });
  }

  const remove = () => {
    refresh();
    dispatch({
      type: 'DELETE_LIST',
      payload: selectedLists
    });
  }

  const enterListSelectMode = (list) => {
    setSelectMode(true);
  }

  const exitListSelectMode = (list) => {
    refresh();
  }

  const toggleSearch = () => {
    setQuery('');
    setSearch(!search);
  }

  const displayChange = (display) => {
    props.setDisplay(display);
  }

  const selectList = (list) => {
    if (!selectMode) {
      setSelectMode(true);
    }

    let selected = selectedLists;
    if (selectedLists.includes(list.id)) {
      selected = selectedLists.filter(id => id !== list.id);
    } else {
      selected = [...selected, list.id];
    }

    setSelectedLists(selected);
  }

  const viewProps = {
    selectedLists: selectedLists,
    onSelect: selectList,
    enterListSelectMode:  enterListSelectMode,
    exitListSelectMode:  exitListSelectMode,
    editId,
    setEditId,
    query,
    selectMode,
    setSelectMode,
    remove,
    update,
    ...props
  };

  const getView = () => {
    const View = DISPLAY[props.display];
    return <View {...viewProps} />
  }

  return (
    <>
      <ListMenuBar
        search={search}
        toggleSearch={toggleSearch}
        exitListSelectMode={exitListSelectMode}
        display={props.display}
        onDisplayChange={displayChange}
        {...viewProps}
      />
      {search &&
        <Search
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onCloseSearch={toggleSearch}
        />
      }
      {getView()}
        <ListSelectModeFooter
          onRename={(listId) => setEditId(listId)}
          {...viewProps}
        />
    </>
  );
}

export default Lists;
