import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    //activeList: null
    activeList: lists[0]
  });

  const onDragEnd = result => {
    console.log(result);
  }

  const activeContent = () => {
    if (state.activeList) {
       return (
         <DragDropContext onDragEnd={onDragEnd}>
           <div className="container">
             <Droppable droppableId="0">
               {(provided, snapshot) => (
                 <div
                   ref={provided.innerRef}
                   {...provided.droppableProps}
                 >
                   <TodoItems items={state.activeList.items} />
                   {provided.placeholder}
                 </div>
               )}
             </Droppable>
           </div>
         </DragDropContext>
         /*
         <DragDropContext>
           <Droppable>
             state.activeList.items.map(item => (
               <Draggable>
                 <TodoItem key={item.id} {...item} />
               </Draggable>
             ))
           </Droppable>
         </DragDropContext>
         */
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

const TodoItems = ({items}) => {
  return (
    <>
      <div className="todoItems">
        {items.map((item, index) => (
          <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
             {(provided, snapshot) => (
               <div
                 ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}
               >
                 <TodoItem key={item.id} {...item} />
              </div>
             )}
          </Draggable>
        ))}
      </div>
    </>
  );
}

export default ToDo;
