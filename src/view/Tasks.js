import React, { useContext } from 'react';
import TodoItems from './TodoItems';
import { TodoContext } from 'TodoContext';

const Tasks = (props) => {
  const {state, dispatch} = useContext(TodoContext);

  return (
    <>
      <TodoItems
          listId={props.listId}
          items={state.items.filter(item => item.listId === props.listId)}
          onCreateTodoItem={(item) => dispatch({ type: 'ADD_LIST_ITEM', payload: item})}
          onReorderTodoItems={(items) => dispatch({ type: 'REORDER_LIST_ITEMS', payload: items})}
      />
    </>
  );
}

export default Tasks;
