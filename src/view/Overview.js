import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import TaskOverviewMenu from 'task/TaskOverviewMenu';
import ListOverviewMenu from 'list/ListOverviewMenu';
import Lists from 'list/Lists';
import TasksDueToday from 'task/TasksDueToday';
import ScheduledTasks from 'task/ScheduledTasks';

const Overview = (props) => {
  const {state} = useContext(TodoContext);
  const [viewIndex, setViewIndex] = useState(0);
  const change = (event) => {
    setViewIndex(event.target.value);
  }

  const view = [
    <>
      <ListOverviewMenu {...props} onSelectView={change} />
      <Lists
        lists={state.lists}
        onListClick={props.onListClick}
      />
    </>,
    <>
      <TaskOverviewMenu  {...props} onSelectView={change} />
      <TasksDueToday items={state.items} />
    </>,
    <>
      <TaskOverviewMenu  {...props} onSelectView={change} />
      <ScheduledTasks items={state.items} />
    </>
  ];

  return (
    <>
      {view[viewIndex]}
    </>
  );
}

export default Overview;
