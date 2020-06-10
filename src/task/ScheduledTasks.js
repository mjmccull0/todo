import React from 'react';
import TodoItem from './TodoItem';

const ScheduledTasks = ({items}) => {
  const scheduledTasks = items.filter(item => item.dueDate !== '');
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
