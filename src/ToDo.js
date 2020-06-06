import React from 'react';
import AppView from './AppView';
import TodoItems from 'todoListItem/TodoItems';
import MenuBar from 'common/MenuBar';
import BackButton from 'common/BackButton';
import CreateList from 'todoList/CreateList';
import Lists from 'todoList/Lists';
import ListFilter from 'todoList/ListFilter';
import { useTodoLists } from 'todoList/useLists';
import './ToDo.css';


function ToDo() {
  const [state, dispatch] = useTodoLists();

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

  const renameTodoList = (list) => {
    dispatch({
      type: 'UPDATE_LIST',
      payload: list 
    });
  }

  const deleteTodoLists = () => {
    dispatch({
      type: 'DELETE_LIST'
    });
  }

  const createTodoItem = (item) => {
    dispatch({
      type: 'ADD_LIST_ITEM',
      payload: item
    });
  }

  const deleteTodoItem = (item) => {
    dispatch({
      type: 'DELETE_LIST_ITEM',
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
      const items = state.items.filter(item => item.listId === state.activeList.id);
      return (
        <>
        <MenuBar>
          <BackButton goBackToLists={goToLists} />
        </MenuBar>
          <TodoItems
            listId={state.activeList.id}
            items={items}
            onCreateTodoItem={(itemName) => createTodoItem(itemName)}
            onReorderTodoItems={(items) => reorderTodoItems(items)}
            update={(item) => updateTodoItem(item)}
            remove={(item) => deleteTodoItem(item)}
          />
        </>
      )
    }

    return (
      <>
        <MenuBar>
          <CreateList createTodoList={(list) => createTodoList(list)} />
          <ListFilter />
        </MenuBar>
        <Lists
          lists={state.lists}
          onListClick={(listId) => showTodoListItems(listId)}
          onSelectList={(listId) => selectList(listId)}
          onRenameTodoList={renameTodoList}
          onDeleteTodoLists={deleteTodoLists}
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
