import React from 'react';
import AppView from './AppView';
import TodoItems from 'todoListItem/TodoItems';
import MenuBar from 'common/MenuBar';
import BackButton from 'common/BackButton';
import CreateList from 'todoList/CreateList';
import Lists from 'todoList/Lists';
import ListFilter from 'todoList/ListFilter';
import Button from 'common/Button';
import { useTodoLists } from 'todoList/useLists';
import './ToDo.css';

import { today } from 'util/date';
import TodoItem from 'todoListItem/TodoItem';


function ToDo() {
  const [state, dispatch] = useTodoLists();
  const [active, setActive] = React.useState(0);

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
          <MenuBar
            left={
              <BackButton goBackToLists={goToLists} />
            }
          />
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
    const dueToday = state.items.filter(item => item.dueDate === today());
    const scheduledTasks = state.items.filter(item => item.dueDate !== '');
    return (
      <>
      {active === 0 &&
        <>
          <MenuBar
            left={
              <CreateList createTodoList={(list) => createTodoList(list)} />
            }
            center={
              <ListFilter>
                <Button label="Lists" onClick={() => setActive(0)} />
                <Button label="Today" onClick={() => setActive(1)} />
                <Button label="Scheduled" onClick={() => setActive(2)} />
              </ListFilter>
           }
          >
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
      }
      {active === 1 &&
        <>
          <MenuBar
            center={
              <ListFilter>
                <Button label="Lists" onClick={() => setActive(0)} />
                <Button label="Today" onClick={() => setActive(1)} />
                <Button label="Scheduled" onClick={() => setActive(2)} />
              </ListFilter>
           }
          >
          </MenuBar>
          <ol>
            {dueToday.map(item => (
              <li key={item.id}>
              <TodoItem
                item={item}
                update={(item) => updateTodoItem(item)}
                remove={(item) => deleteTodoItem(item)}
              />
              </li>
            ))}
          </ol>
        </>
      }
      {active === 2 &&
        <>
          <MenuBar
            center={
              <ListFilter>
                <Button label="Lists" onClick={() => setActive(0)} />
                <Button label="Today" onClick={() => setActive(1)} />
                <Button label="Scheduled" onClick={() => setActive(2)} />
              </ListFilter>
           }
          >
          </MenuBar>
          <ol>
            {scheduledTasks.map(item => (
              <li key={item.id}>
                <TodoItem
                  item={item}
                  update={(item) => updateTodoItem(item)}
                  remove={(item) => deleteTodoItem(item)}
                />
              </li>
            ))}
          </ol>
        </>
      }
      </>
    );
  }

  return (
    <AppView>
      {getActiveView()}
    </AppView>
  );
}

const DisplayFilter = (props) => {
  const [state, dispatch] = useTodoLists();
  // Today's scheduled tasks
  /*
  props.items.map(item => {
    if (item.dueDate === today()) {
      console.log(item);
    }
  });
  */
  const dueToday = props.items.filter(item => item.dueDate === today());
  console.log(dueToday);

  // scheduled tasks
  /*
  props.items.map(item => {
    if (item.dueDate) {
      console.log('// Scheduled tasks');
      console.log(item);
    }
  });
  */
  const scheduledTasks = props.items.filter(item => item.dueDate !== '');
  console.log(scheduledTasks);

  const showTodoListItems = (listId) => {
    console.log(listId);
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

  const selectList = ({id}) => {
    dispatch({
      type: 'SET_SELECTED_LISTS',
      listId: id
    });
  }


  return (
    <>
      <MenuBar>
        <CreateList createTodoList={(list) => createTodoList(list)} />
        <ListFilter />
      </MenuBar>
      <h1>Lists</h1>
      <Lists
        lists={state.lists}
        onListClick={(listId) => showTodoListItems(listId)}
        onSelectList={(listId) => selectList(listId)}
        onRenameTodoList={renameTodoList}
        onDeleteTodoLists={deleteTodoLists}
        selectedLists={state.selectedLists}
      />
      <h1>Today</h1>
      <h1>Scheduled</h1>
    </>
  );
}


export default ToDo;
