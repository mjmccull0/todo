import React from 'react';

const Lists = (props = {lists: []}) => {
  if (props.lists.length === 0) {
    return null;
  }

  return (
    <ul className="lists">
      {props.lists.map(list => (
        <li key={list.id}>{list.name}</li>
      ))}
    </ul>
  );
}

export default Lists;
