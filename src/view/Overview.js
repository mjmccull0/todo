import React, { useContext, useState } from 'react';
import { TodoContext } from 'TodoContext';
import Lists from 'list/Lists';
import TasksDueToday from 'task/TasksDueToday';
import ScheduledTasks from 'task/ScheduledTasks';
import MenuBar from 'common/MenuBar';
import CreateList from 'list/CreateList';
import SearchButton from 'common/SearchButton';
import Button from 'common/Button';

const Overview = (props) => {
  const {state} = useContext(TodoContext);
  const [viewIndex, setViewIndex] = useState(0);
  const view = [
    <Lists
      lists={state.lists}
      onListClick={props.onListClick}
    />,
    <TasksDueToday items={state.items} />,
    <ScheduledTasks items={state.items} />,
  ];

  const change = (index) => {
    setViewIndex(index);
  }

  return (
    <>
      <OverviewMenuBar {...props} onClick={change} />
      {view[viewIndex]}
    </>
  );
}

const OverviewMenuBar = (props) => {
  const handleClick = (event) => {
    props.onClick(event.target.value);
  }

  return (
    <MenuBar
      left={
        <CreateList />
      }
      center={
        <>
          <Button label="List" onClick={handleClick} value="0" />
          <Button label="Today" onClick={handleClick} value="1" />
          <Button label="Scheduled" onClick={handleClick} value="2" />
        </>
      }
      right={
        <>
          <Button onClick={props.toggleListSelect} className="checkIcon" />
          <SearchButton />
        </>
      }
    />
  )
}

export default Overview;
