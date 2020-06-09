import React, { useContext, useReducer } from 'react';
import { TodoProvider } from 'TodoContext';
import TodoLists from 'list/TodoLists';
import TasksDueToday from 'task/TasksDueToday';
import ScheduledTasks from 'task/ScheduledTasks';
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
