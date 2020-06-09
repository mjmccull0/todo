import React, { useContext } from 'react';
import MenuBar from 'common/MenuBar';
import TodoItems from './TodoItems';
import BackButton from 'common/BackButton';
import { TodoContext } from 'TodoContext';

const Tasks = (props) => {
  const {state, dispatch} = useContext(TodoContext);

  return (
    <>
      <MenuBar
        left={
          <BackButton onClick={() => dispatch({ type: 'GO_TO_LISTS' })} />
        }
      >
      </MenuBar>
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
