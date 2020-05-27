import React, { useState } from 'react';
import AppView from './AppView';
import TodoItems from './TodoItems';
import TodoItemsMenu from './TodoItemsMenu';
import ListsMenu from './ListsMenu';
import Lists from './Lists';
import { useLists } from './useLists';

function ToDo() {
  const [lists, getItems, getList] = useLists();
  const [activeList, setActiveList] = useState(null);

  const goToLists = () => {
    setActiveList(null);
  }

  const selectList = (listId) => {
    setActiveList(getList(listId));
  }

  const getActiveView = () => {
    if (activeList) {
      return (
        <>
          <TodoItemsMenu goBackToLists={goToLists} />
          <TodoItems items={activeList.items} />
        </>
      )
    }
    return (
      <>
        <ListsMenu />
        <Lists
          lists={lists}
          onSelect={(listId) => selectList(listId)}
        />
      </>
    );
  }

  return (
    <AppView>
      {getActiveView()}
    </AppView>
  );
}


export default ToDo;
