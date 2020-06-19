import React, { useContext } from 'react';
import { TodoContext } from 'TodoContext';
import Button from 'common/Button';
import { today } from 'util/date';

const OverviewViewSelector = (props) => {
  const {click, active} = {...props};
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

  const buttonLabel = [
    { label: "List" },
    { label: `Today ${countDueToday()}`},
    { label: `Scheduled ${countScheduled()}`}
  ];

  return (
    <>
      {buttonLabel.map((button, index) => (
        <Button
          key={button.label}
          label={button.label}
          onClick={click}
          value={index}
          className={`${active}` === `${index}` ? 'active' : ''}
        />
      ))}
    </>
  );
}

export default OverviewViewSelector;
