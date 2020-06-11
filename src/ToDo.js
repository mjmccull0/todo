import React from 'react';
import Overview from 'view/Overview';
import ListSelectMode from 'view/ListSelectMode';
import Tasks from 'task/Tasks';
import TaskMenu from 'task/TaskMenu';
import './ToDo.css';

function ToDo() {
  const [index, setIndex] = React.useState(0);
  const [openList, setOpenList] = React.useState(null);
  const [selectedList, setSelectedList] = React.useState([]);

  const showListTasks = (list) => {
    setOpenList(list);
  }

  const enterListSelectMode = (list) => {
    setSelectedList([list.id]);
    setIndex(1);
  }

  const exitListSelectMode = (list) => {
    setIndex(0);
  }

  const view = [
    <Overview
      onListClick={(event) => showListTasks(event)}
      enterListSelectMode={enterListSelectMode}
    />,
    <ListSelectMode
      selectedList={selectedList}
      exitListSelectMode={exitListSelectMode}
    />
  ];


  const View = (props) => {
    if (openList) {
      return (
        <>
          <TaskMenu
            title={openList.name}
            onBack={() => setOpenList(null)}
          />
          <Tasks listId={openList.id} />
        </>
      )
    }
    return view[index];
  }

  return <View />
}

export default ToDo;
