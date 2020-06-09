import React, { useContext, useReducer } from 'react';
import { TodoProvider } from 'TodoContext';
import TodoLists from 'TodoLists';
import TasksDueToday from 'task/TasksDueToday';
import ScheduledTasks from 'task/ScheduledTasks';
import Tasks from 'task/Tasks';
import './ToDo.css';

import ViewSelector from 'ViewSelector';

function ToDo() {
  const [listId, setListId] = React.useState(null);
  return (
    <>
      <ViewSelector>
        <TodoLists label="List" />
        <TasksDueToday label="Today" />
        <ScheduledTasks label="Scheduled" />
      </ViewSelector>
    </>
  );
}

export default ToDo;
