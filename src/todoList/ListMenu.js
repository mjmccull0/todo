import React from 'react';
import Button from 'common/Button';
import ListFilter from './ListFilter';

const ListMenu = (props = {}) => {
  return (
    <div className="list-menu">
      <Button label="New List" />
      <ListFilter />
    </div>
  );
}

export default ListMenu; 
