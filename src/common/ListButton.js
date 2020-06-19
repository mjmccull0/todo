import React from 'react';
import Button from 'common/Button';
import { ListIcon } from 'common/Icons';

const ListButton = (props) => {
  return (
    <Button className="listIcon" {...props}>
      <ListIcon />
    </Button>
  );
}

export default ListButton;
