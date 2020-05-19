import React from 'react';
import ListFilter from './ListFilter';
import Button from './Button';

const MainMenu = (props = {}) => {
  return (
    <div className="main-menu">
      <Button label="New List" />
      <ListFilter />
    </div>
  );
}

export default MainMenu; 
