import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from 'TodoContext';


const ScheduledTasks = (props) => {
  const {state, dispatch} = useContext(TodoContext);
  const scheduledTasks = state.items.filter(item => item.dueDate !== '');
  return (
    <ol>
      {scheduledTasks.map(item => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ol>
  );
}

export default ScheduledTasks;
