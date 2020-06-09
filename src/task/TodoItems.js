import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CreateTodoItem from './CreateTodoItem';
import TodoItem from './TodoItem';
import reorder from 'util/reorder';

const TodoItems = (props) => {
  const {listId, items, onCreateTodoItem, onReorderTodoItems, remove, update} = {...props};
  const handleEnterKeyPress = (itemName) => {
    onCreateTodoItem({listId, item: {name: itemName}});
  }

  const onDragEnd = ({source, destination}) => {
    if (destination) {
      const reorderedItems = reorder(items, source.index, destination.index);

      onReorderTodoItems({
        listId,
        items: reorderedItems
      });
    }
  };

  // The below may need to be broken into separate components.  At this 
  // time it makes the most sense to keep all of the logic dependent
  // on react-beautiful-dnd in one place—just in case a different 
  // implementation of drag and drop needs to replace it.
  return (
    <>
      <CreateTodoItem
        listId={listId}
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
                   <Draggable
                     key={item.id}
                     draggableId={`${item.id}`}
                     index={index}
                   >
                     {(provided, snapshot) => (
                       <div
                         ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                       >
                         <TodoItem
                          key={item.id}
                          item={item}
                          update={(item) => update(item)}
                          remove={(item) => remove(item)}
                         />
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
