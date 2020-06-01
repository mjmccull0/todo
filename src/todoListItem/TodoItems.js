import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CreateTodoItem from './CreateTodoItem';
import TodoItem from './TodoItem';

const TodoItems = (props) => {
  const listId = props.listId;
  const items = props.items;

  // TODO: Refactor
  const handleEnterKeyPress = (itemName) => {
    props.onCreateTodoItem({listId, item: {name: itemName}});
  }

  const onDragEnd = result => {
    // Documentation says onDragEnd is necessary.  Probably a good place
    // to trigger saving state for the order of the todo list items.
  }

  // The below may need to be broken into separate components.  At this 
  // time it makes the most sense to keep all of the logic dependent
  // on react-beautiful-dnd in one place—just in case a different 
  // implementation of drag and drop needs to replace it.
  return (
    <>
      <CreateTodoItem
        onEnterKeyPress={(todoName) => handleEnterKeyPress(todoName)}
      />
      <DragDropContext onDragEnd={onDragEnd}>
         <Droppable droppableId="0">
           {(provided, snapshot) => (
             <div
               ref={provided.innerRef}
               {...provided.droppableProps}
             >
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
               {provided.placeholder}
             </div>
           )}
         </Droppable>
      </DragDropContext>
    </>
  );
}

export default TodoItems;
