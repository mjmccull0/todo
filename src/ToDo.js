import React from 'react';
import Overview from 'view/Overview';
import ListSelectMode from 'view/ListSelectMode';
import Tasks from 'view/Tasks';
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
    if (list.id) {
      setSelectedList([list.id]);
    }
    setIndex(1);
  }

  const exitListSelectMode = (list) => {
    setSelectedList([]);
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
            list={openList}
            onBack={() => setOpenList(null)}
            onColorChange={(list) => setOpenList(list)}
          />
          <Tasks list={openList} />
        </>
      )
    }
    return view[index];
  }

  return <View />
}

export default ToDo;
