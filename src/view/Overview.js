import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import TaskOverviewMenu from 'task/TaskOverviewMenu';
import TasksDueToday from 'task/TasksDueToday';
import ScheduledTasks from 'task/ScheduledTasks';
import Lists from './Lists';

const Overview = (props) => {
  const {state} = useContext(TodoContext);
  const [viewIndex, setViewIndex] = useState(0);

  const change = (event) => {
    setViewIndex(event.target.value);
  }

  const view = [
    <>
      <Lists
        lists={state.lists}
        onListClick={props.onListClick}
        onSelectView={change}
        setDisplay={props.setDisplay}
        display={props.display}
      />
    </>,
    <>
      <TaskOverviewMenu
        {...props}
        active={viewIndex}
        onSelectView={change}
      />
      <TasksDueToday items={state.items} />
    </>,
    <>
      <TaskOverviewMenu
        {...props}
        active={viewIndex}
        onSelectView={change}
      />
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
