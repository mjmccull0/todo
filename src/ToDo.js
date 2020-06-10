import React from 'react';
import Overview from 'view/Overview';
import ListSelectMode from 'view/ListSelectMode';
import Tasks from 'task/Tasks';
import TaskMenu from 'task/TaskMenu';
import './ToDo.css';

function ToDo() {
  const [index, setIndex] = React.useState(0);
  const [list, setList] = React.useState(null);

  const select = (list) => {
    setList(list);
  }

  const toggleListSelect = () => {
    if (index === 1) {
      setIndex(0);
    } else {
      setIndex(1);
    }
  }

  const view = [
    <Overview
      onListClick={(event) => select(event)}
      toggleListSelect={toggleListSelect}
    />,
    <ListSelectMode toggleListSelect={toggleListSelect} />
  ];


  const View = (props) => {
    if (list) {
      return (
        <>
          <TaskMenu title={list.name} onBack={() => setList(null)} />
          <Tasks listId={list.id} />
        </>
      )
    }
    return view[index];
  }

  return <View />
}

export default ToDo;
