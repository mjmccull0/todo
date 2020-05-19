import React, { useState } from 'react';
import './ToDo.css';
import AppView from './AppView';
import Lists from './Lists';
import TodoItem from './TodoItem';
import MainMenu from './MainMenu';

const lists = [
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
  const [state, setState] = useState({
    lists,
    activeList: null
  });

  const activeContent = () => {
    if (state.activeList) {
       return (
         state.activeList.items.map(item => (
           <TodoItem key={item.id} {...item} />
         ))
       )
    }
    return <Lists lists={state.lists} />
  }

  return (
    <AppView>
      <MainMenu />
      {activeContent()}
    </AppView>
  );
}

export default ToDo;
