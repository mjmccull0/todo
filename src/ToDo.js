import React from 'react';
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

  const goToLists = () => {
    dispatch({
      type: 'GO_TO_LISTS'
    });
  }

  const selectList = ({id}) => {
    dispatch({
      type: 'SET_SELECTED_LISTS',
      listId: id
    });
  }

  const showTodoListItems = (listId) => {
    dispatch({
      type: 'SET_ACTIVE_LIST',
      payload: listId
    });
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

  const updateTodoItem = (item) => {
    dispatch({
      type: 'UPDATE_LIST_ITEM',
      payload: item 
    });
  }

  const reorderTodoItems = (items) => {
    dispatch({
      type: 'REORDER_LIST_ITEMS',
      payload: items 
    });
  }

  const getActiveView = () => {
    if (state.activeList) {
      return (
        <>
          <TodoItemsMenu goBackToLists={goToLists} />
          <TodoItems
            listId={state.activeList.id}
            items={state.activeList.items}
            onCreateTodoItem={(itemName) => createTodoItem(itemName)}
            onReorderTodoItems={(items) => reorderTodoItems(items)}
            update={(item) => updateTodoItem(item)}
          />
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
