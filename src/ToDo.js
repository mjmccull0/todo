import React from 'react';
import Overview from 'view/Overview';
import Tasks from 'view/Tasks';
import TaskMenu from 'task/TaskMenu';
import './ToDo.css';


function ToDo() {
  const [openList, setOpenList] = React.useState(null);
  const [display, setDisplay] = React.useState('list');

  const showListTasks = (list) => {
    setOpenList(list);
  }

  return (
    <>
      {openList
        ? <>
            <TaskMenu
              list={openList}
              onBack={() => setOpenList(null)}
              onColorChange={(list) => setOpenList(list)}
            />
            <Tasks list={openList} />
          </>
        : <Overview
            onListClick={(event) => showListTasks(event)}
            display={display}
            setDisplay={setDisplay}
          />
      }
    </>
  );
}

export default ToDo;
