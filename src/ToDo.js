import React, { useState } from 'react';
import AppView from './AppView';
import TodoItems from 'todoListItem/TodoItems';
import TodoItemsMenu from 'todoListItem/TodoItemsMenu';
import ListsMenu from 'todoList/ListsMenu';
import Lists from 'todoList/Lists';
import { useTodoLists } from 'todoList/useLists';
import './ToDo.css';


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
    setActiveList({...state.lists[listId]});
  }

  const createTodoList = (listName) => {
    dispatch({
      type: 'ADD_LIST',
      listName
    });
  }

  const createTodoItem = (item) => {
    dispatch({
      type: 'ADD_LIST_ITEM',
      payload: item 
    });
  }

  const getActiveView = () => {
    if (activeList) {
      return (
        <>
          <TodoItemsMenu goBackToLists={goToLists} />
          <TodoItems
            listId={activeList.id}
            items={activeList.items}
            onCreateTodoItem={(itemName) => createTodoItem(itemName)}
          />
        </>
      )
    }
    /* TEMP CODE */
    if (state.lists[0]) {
      showTodoListItems(0);
    }
    /* END  TEMP CODE */
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
