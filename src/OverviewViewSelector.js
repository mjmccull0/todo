import React, { useContext } from 'react';
import { TodoContext } from 'TodoContext';
import Button from 'common/Button';
import { today } from 'util/date';

const OverviewViewSelector = ({click, items}) => {
  const {state} = useContext(TodoContext);
  const dueToday = state.items.filter(item => item.dueDate === today());
  const scheduledTasks = state.items.filter(item => item.dueDate !== '');
  return (
    <>
      <Button label="List" onClick={click} value="0" />
      <Button label={`Today (${dueToday.length})`} onClick={click} value="1" />
      <Button label={`Scheduled (${scheduledTasks.length})`} onClick={click} value="2" />
    </>
  );
}

export default OverviewViewSelector;
