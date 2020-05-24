import React, { useState } from 'react';
import AppView from './AppView';
import Lists from './Lists';
import TodoItems from './TodoItems';
import MainMenu from './MainMenu';

const usersLists = [
  {
    id: 0,
    name: "Personal",
    items: [
      {
        id: 0,
        name: "ABC",
        notes: "About ABC",
        dueDate: new Date(),
        priority: "None"
      },
      {
        id: 1,
        name: "DEF",
        notes: "",
        dueDate: new Date(),
        priority: "" 
      }
    ],
  },
  {
    id: 1,
    name: "Honey Do",
    items: [
      {
        id: 0,
        name: "XYZ",
        notes: "About XYZ",
        dueDate: "",
        priority: ""
      }
    ],
  },
]

function ToDo() {
  const [lists, setLists] = useState(usersLists);
  const [activeList, setActiveList] = useState(null);

  const getActiveView = () => {
    if (activeList) {
      return <TodoItems items={activeList.items} />
    }
    return <Lists lists={lists} />
  }

  return (
    <AppView>
      <MainMenu />
      {getActiveView()}
    </AppView>
  );
}


export default ToDo;
