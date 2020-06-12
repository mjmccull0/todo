import React from 'react';
import TodoItem from './TodoItem';
import { today } from 'util/date';

const TasksDueToday = ({items}) => {
  const dueToday = items.filter(item => item.dueDate === today());
  return (
    <ol>
      {dueToday.map(item => (
        <li key={item.id}>
          <TodoItem item={item} listName={true} />
        </li>
      ))}
    </ol>
  );
}

export default TasksDueToday;
