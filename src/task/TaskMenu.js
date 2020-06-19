import React from 'react';
import Header from 'common/Header';
import MenuBar from 'common/MenuBar';
import BackButton from 'common/BackButton';
import MenuButton from 'common/MenuButton';
import ColorPicker from 'common/ColorPicker';
import {TodoContext} from 'TodoContext';

const TaskMenu = (props) => {
  const {dispatch} = React.useContext(TodoContext);

  // FIXME:  This logic may live somewhere else.
  const update = (value) => {
    props.onColorChange({...props.list, color: value.rgb });
    // FIXME: move dispatch somewhere else? 
    dispatch({
      type: 'UPDATE_LIST',
      payload: {...props.list, color: value.rgb }
    });
  }
  return (
    <>
      <MenuBar
        left={
          <BackButton onClick={props.onBack} />
        }
        center={
          <Header>{props.list.name}</Header>
        }
        right={
          <>
            <ColorPicker
              color={props.list.color}
              change={update}
            />
            <MenuButton />
          </>
        }
      />
    </>
  )
}

export default TaskMenu;
