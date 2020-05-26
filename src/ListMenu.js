import React from 'react';
import ListFilter from './ListFilter';
import Button from './Button';

const ListMenu = (props = {}) => {
  return (
    <div className="list-menu">
      <Button label="New List" />
      <ListFilter />
    </div>
  );
}

export default ListMenu; 
