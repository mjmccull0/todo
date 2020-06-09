import React from 'react';
import Button from 'common/Button';
import MenuBar from 'common/MenuBar';
import CreateList from 'list/CreateList';
import Tasks from 'task/Tasks';
import { TodoContext } from 'TodoContext';


const ViewSelector = (props) => {
  const [currentView, setCurrentView] = React.useState(props.children[0]);
  const {state, dispatch} = React.useContext(TodoContext);

  const menubar = (
    <MenuBar
     left={
       <CreateList />
     }
     center={
       props.children.map((child, index) => (
        <Button
          key={child.props.label}
          value={index}
          onClick={() => setCurrentView(props.children[index])}
          label={child.props.label}
        />
      ))
     }
    />
  );

  const getCurrentView = () => {
    if (state.activeList) {
      return <Tasks listId={state.activeList.id} />
    }
    return (
      <>
        {menubar} 
        {currentView}
      </>
    )
  }
  
  return (
    <>
      {getCurrentView()}
    </>
  );
}

export default ViewSelector;
