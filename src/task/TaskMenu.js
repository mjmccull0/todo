import React from 'react';
import Header from 'common/Header';
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
        center={
          <Header>{props.title}</Header>
        }
        right={
          <MenuButton />
        }
      />
    </>
  )
}

export default TaskMenu;
