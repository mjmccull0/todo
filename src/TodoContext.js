import React, { useEffect, useReducer } from 'react';
import { dbConfig } from 'db/dbConfig';
import { initDB } from 'react-indexed-db';
import { useIndexedDB } from 'react-indexed-db';

initDB(dbConfig);

const listStore = useIndexedDB('lists');
const itemStore = useIndexedDB('items');

const initialState = {
  loading: false,
  error: false,
  lists: [],
  items: [],
  activeList: null,
  selectedLists: []
}

function todoListReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST': {
      const list = {
        name: action.listName,
        complete: false,
        color: {
          r: 190,
          g: 206,
          b:221 
        }
      };
      listStore.add(list);
      return {...state, loading: true};
    }
    case 'UPDATE_LIST': {
      listStore.update(action.payload);
      return {...state, selectedLists: [], loading: true};
    }
    case 'DELETE_LIST': {
      action.payload.forEach(listId => listStore.deleteRecord(listId));
      return {...state, loading: true};
    }
    case 'ADD_LIST_ITEM': {
      const {listId, item} = {...action.payload};
      const newItem = {
        "name":"",
        "notes":"",
        "dueDate":"",
        "priority":"none",
        "complete": false,
        "position": 0,
        "listId": listId,
        ...item
      };
      itemStore.add(newItem);
      return {...state, loading: true};
    }
    case 'DELETE_LIST_ITEM': {
      itemStore.deleteRecord(action.payload.id);
      return {...state, loading: true}; 
    }
    case 'UPDATE_LIST_ITEM': {
      itemStore.update(action.payload);
      return {...state, loading: true};
    }
    case 'REORDER_LIST_ITEMS': {
      const items = action.payload.items.map((item, index) => {
        item.position = index;
        itemStore.update(item);
        return item;
      });
      return {...state, items, loading: true};
    }
    case 'LOADING': {
      return {
        ...state,
        loading: action.loading 
      }
    }
    case 'ERROR': {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    case 'SET_LISTS': {
      const itemsByPosition = (a, b) => {
        if (a.position === b.position) {
          return 0;
        }

        if (a.position > b.position) {
          return 1;
        }

        return -1;
      }

    action.items.sort(itemsByPosition);

      return {
        ...state,
        loading: false,
        error: false,
        lists: action.lists,
        items: action.items
      }
    }
    case 'SET_ACTIVE_LIST': {
      return {...state, activeList: { id: action.payload}};
    }
    case 'GO_TO_LISTS': {
      return {...state, activeList: null};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const TodoContext = React.createContext(initialState);

function TodoProvider(props) {
  const [state, dispatch] = useReducer(todoListReducer, initialState);

  useEffect(() => {
    const getAllUserData = async () => {
      const lists = await listStore.getAll();
      const items = await itemStore.getAll();
        dispatch({
          type: 'SET_LISTS',
          lists,
          items
        });
      }
    getAllUserData();
  }, [state.loading]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
       {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
