import React, { useState } from 'react';
import AppView from './AppView';
import TodoItems from './TodoItems';
import TodoItemsMenu from './TodoItemsMenu';
import ListsMenu from './ListsMenu';
import Lists from './Lists';
import { useTodoLists } from './useLists';


function ToDo() {
  const [state, dispatch] = useTodoLists({
    url: 'http://localhost:3000/data.json'
  });
  const [activeList, setActiveList] = useState(null);

  const goToLists = () => {
    setActiveList(null);
  }

  const selectList = ({id}) => {
    dispatch({
      type: 'SET_SELECTED_LISTS',
      listId: id
    });
  }

  const showTodoListItems = (listId) => {
    setActiveList(state.lists[listId]);
  }

  const createTodoList = (listName) => {
    dispatch({
      type: 'ADD_LIST',
      listName
    });
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
        <ListsMenu createTodoList={(list) => createTodoList(list)}/>
        <Lists
          lists={state.lists}
          onListClick={(listId) => showTodoListItems(listId)}
          onSelectList={(listId) => selectList(listId)}
          selectedLists={state.selectedLists}
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
