import React from 'react';
import TodoItem from './TodoItem';
import { today, tomorrow, daysBetween } from 'util/date';

const ScheduledTasks = ({items}) => {
  const scheduledTasks = items.filter(item => item.dueDate !== '');
  const tasksByDate = TasksByDate(scheduledTasks);
  return (
    <>
      {[...tasksByDate.keys()].map(date => {
        return (
          <div key={date}>
            {getDateHeader(date)}
            {tasksByDate.get(date).map(task => (
              <ol key={task.id}>
                <li>
                  <TodoItem item={task} listName={true} />
                </li>
              </ol>
            ))}
          </div>
        )
      })}
    </>
  );
}

const getDateHeader = (date) => {
  let header;
  switch (date) {
    case today():
      header = 'Today';
      break;
    case tomorrow():
      header = 'Tomorrow';
      break;
    default:
      if (new Date(date).getTime() < new Date().getTime()) {
        header = `${daysBetween(new Date(date), new Date())} days ago`;
      }
      if (new Date(date).getTime() > new Date().getTime()) {
        header = `In ${daysBetween(new Date(date), new Date())} days`;
      }
      break;
  }
  return header;
}


const itemsByDate = (a, b) => {
  if (a.dueDate === b.dueDate) {
    return 0;
  }

  if (a.dueDate > b.dueDate) {
    return 1;
  }

  return -1;
}

const TasksByDate = (items) => {
  const itemMap = new Map();
  items.sort(itemsByDate).forEach(item => {
    let dateGroup = [];
    if (itemMap.get(item.dueDate)) {
      dateGroup = itemMap.get(item.dueDate);
    }
    dateGroup.push(item);
    itemMap.set(item.dueDate, dateGroup);
  });
  return itemMap;
}

export default ScheduledTasks;
