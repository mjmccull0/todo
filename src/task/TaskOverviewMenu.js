import React from 'react';
import OverviewViewSelector from 'OverviewViewSelector';
import MenuBar from 'common/MenuBar';
import MenuButton from 'common/MenuButton';

const TaskOverviewMenu = (props) => {
  return (
    <MenuBar
      right={
        <MenuButton click={props.onMenuClick} />
      }
      center={
        <OverviewViewSelector
          active={props.active}
          click={props.onSelectView}
        />
      }
    />
  )
}

export default TaskOverviewMenu;
