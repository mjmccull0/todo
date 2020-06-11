import React, { useContext } from 'react';
import { TodoContext } from 'TodoContext';
import Button from 'common/Button';
import { today } from 'util/date';

const OverviewViewSelector = ({click, items}) => {
  const {state} = useContext(TodoContext);

  const countDueToday = () => {
    const dueToday = state.items.filter(item => item.dueDate === today());
    if (dueToday.length > 0) {
      return `(${dueToday.length})`;
    }
    return ``;
  }

  const countScheduled = () => {
    const scheduledTasks = state.items.filter(item => item.dueDate !== '');
    if (scheduledTasks.length > 0) {
      return `(${scheduledTasks.length})`;
    }
    return ``;
  }

  return (
    <>
      <Button label="List" onClick={click} value="0" />
      <Button label={`Today ${countDueToday()}`} onClick={click} value="1" />
      <Button label={`Scheduled ${countScheduled()}`} onClick={click} value="2" />
    </>
  );
}

export default OverviewViewSelector;
