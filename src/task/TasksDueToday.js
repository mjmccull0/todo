import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from 'TodoContext';
import { today } from 'util/date';

const TasksDueToday = (props) => {
  const {state, dispatch} = useContext(TodoContext);
  const dueToday = state.items.filter(item => item.dueDate === today());
  return (
    <ol>
      {dueToday.map(item => (
        <li key={item.id}>
          <TodoItem item={item} />
        </li>
      ))}
    </ol>
  );
}

export default TasksDueToday;
