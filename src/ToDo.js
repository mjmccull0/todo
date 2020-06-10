import React from 'react';
import Overview from 'view/Overview';
import ListSelectMode from 'view/ListSelectMode';
import Tasks from 'task/Tasks';
import './ToDo.css';

function ToDo() {
  const [index, setIndex] = React.useState(0);
  const [listId, setListId] = React.useState(null);

  const select = (listId) => {
    setListId(listId);
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
    if (listId) {
      return <Tasks listId={listId} onBack={() => setListId(null)} />
    }
    return view[index];
  }

  return <View />
}

export default ToDo;
