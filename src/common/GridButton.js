import React from 'react';
import Button from 'common/Button';
import { GridIcon } from 'common/Icons';

const GridButton = (props) => {
  return (
    <Button className="gridIcon" {...props}>
      <GridIcon />
    </Button>
  );
}

export default GridButton;
