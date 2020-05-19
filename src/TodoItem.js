import React from 'react';

const TodoItem = (props) => {
  return (
    <>
      <div className="todo-item" key={props.id}>
        {props.name}
      </div>
    </>
  );
}

export default TodoItem;
