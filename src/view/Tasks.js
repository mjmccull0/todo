import React, { useContext } from 'react';
import TodoItems from 'task/TodoItems';
import { TodoContext } from 'TodoContext';
import styles from './Tasks.module.css';

const Tasks = ({list}) => {
  const {state, dispatch} = useContext(TodoContext);

  return (
    <TasksContainer color={list.color}>
      <TodoItems
          listId={list.id}
          items={state.items.filter(item => item.listId === list.id)}
          onCreateTodoItem={(item) => dispatch({ type: 'ADD_LIST_ITEM', payload: item})}
          onReorderTodoItems={(items) => dispatch({ type: 'REORDER_LIST_ITEMS', payload: items})}
      />
    </TasksContainer>
  );
}

const TasksContainer = ({children, color}) => {
  return (
    <div
      className={styles.container}
      style={{background: `rgba(${color.r}, ${color.g}, ${color.b}`}}
    >
      {children}
    </div>
  );
}

TasksContainer.defaultProps = {
  color: { r: '255', g: '255', b:'255', a: '1' }
};

export default Tasks;
