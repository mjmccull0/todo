import { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  error: false,
  lists: [],
  activeList: null,
  selectedLists: []
}


function todoListReducer(state, action) {
  switch (action.type) {
    case 'ADD_LIST': {
      const list = {
        id: state.lists.length,
        name: action.listName,
        complete: false,
        items: []
      };
      state.lists.push(list);
      return {...state};
    }
    case 'SET_SELECTED_LISTS': {
      let selected = state.selectedLists;
      if (state.selectedLists.includes(action.listId)) {
        selected = state.selectedLists.filter(id => id !== action.listId);
      } else {
        selected = [...selected, action.listId];
      }

      return {...state, selectedLists: [...selected]};
    }
    case 'ADD_LIST_ITEM': {
      const {listId, item} = {...action.payload};
      const list = state.lists[listId];
      const newItem = {
        "id": list.items.length,
        "name":"",
        "notes":"",
        "dueDate":"",
        "priority":"none",
        "complete": false,
        "position": list.items.length,
        "listId": listId,
        ...item
      };
      state.lists[listId].items.push(newItem);
      state.activeList = state.lists[listId];
      return {...state};
    }
    case 'DELETE_LIST_ITEM': {
      const {listId} = {...action.payload};
      const list = state.lists[listId];
      const items = list.items.filter(item => item.id !== action.payload.id);
      state.lists[listId].items = items;
      state.activeList = state.lists[listId];
      return {...state};
    }
    case 'UPDATE_LIST_ITEM': {
      const {listId, id} = {...action.payload};
      const list = state.lists[listId];
      const items = list.items.map(item => {
        if (item.id === id) { 
          return {...item, ...action.payload};
        }
        return item;
      });

      state.lists[listId].items = items;
      state.activeList = state.lists[listId];

      return {...state};
    }
    case 'REORDER_LIST_ITEMS': {
      const { listId, items } = {...action.payload};
      items.map((item, index) => {
        item.position = index;
        return item;
      });
      state.lists[listId].items = items;
      return {...state};
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

      action.lists.map(list => {
        return list.items.sort(itemsByPosition);
      });
      return {
        loading: false,
        error: false,
        lists: action.lists,
        selectedLists: []
      }
    }
    case 'SET_ACTIVE_LIST': {
      return {...state, activeList: state.lists[action.payload]};
    }
    case 'GO_TO_LISTS': {
      return {...state, activeList: null};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const useTodoLists = ({ url }) => {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch(url);
        const lists = await response.json();
        dispatch({
          type: 'SET_LISTS',
          lists 
        });
      } catch (error) {
        dispatch({ type: 'ERROR', error });
      }
    };
    fetchLists();
  }, [url]);
  return [state, dispatch];
}

export { useTodoLists, todoListReducer }; 
