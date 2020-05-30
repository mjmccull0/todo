import React from 'react';
import MenuBar from './MenuBar';
import ListFilter from './ListFilter';
import CreateList from './CreateList';


const ListsMenu = (props = {}) => {
  return (
    <MenuBar>
      <div>
        <CreateList {...props} />
      </div>
      <ListFilter />
      <div>
      </div>
    </MenuBar>
  );
}

export default ListsMenu; 
