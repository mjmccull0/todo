import React from 'react';
import Button from './Button';

const ListFilter = (props = {}) => {
  return (
    <>
      <div className="list-filter">
        <Button label="Lists" />
        <Button label="Today" />
        <Button label="Scheduled" />
      </div>
      {props.children}
    </>
  );
}

export default ListFilter;
