import React from 'react';
import MenuBar from 'common/MenuBar';
import BackButton from 'common/BackButton';
import MenuButton from 'common/MenuButton';

const TaskMenu = (props) => {
  return (
    <>
      <MenuBar
        left={
          <BackButton onClick={props.onBack} />
        }
        right={
          <MenuButton />
        }
      />
    </>
  )
}

export default TaskMenu;
