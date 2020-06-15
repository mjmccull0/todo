import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import TaskOverviewMenu from 'task/TaskOverviewMenu';
import TasksDueToday from 'task/TasksDueToday';
import ScheduledTasks from 'task/ScheduledTasks';


import ListView from 'view/ListView';

const Overview = (props) => {
  const {state} = useContext(TodoContext);
  const [viewIndex, setViewIndex] = useState(0);

  const change = (event) => {
    setViewIndex(event.target.value);
  }

  const view = [
    <>
      <ListView
        lists={state.lists}
        change={change}
        onListClick={props.onListClick}
        enterListSelectMode={props.enterListSelectMode}
        setGrid={props.setGrid}
        grid={props.grid}
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
