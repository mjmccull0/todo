import { useEffect, useReducer } from 'react';

const initialState = {
  loading: false,
  error: false,
  lists: [],
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
      return {
        loading: false,
        error: false,
        lists: action.lists,
        selectedLists: []
      }
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
