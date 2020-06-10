import React from 'react';
import OverviewViewSelector from 'OverviewViewSelector';
import MenuBar from 'common/MenuBar';
import Button from 'common/Button';

const TaskOverviewMenu = (props) => {
  return (
    <MenuBar
      right={
        <>
          <Button className="menu_icon" />
        </>
      }
      center={
        <OverviewViewSelector click={props.onSelectView} />
      }
    />
  )
}

export default TaskOverviewMenu;
