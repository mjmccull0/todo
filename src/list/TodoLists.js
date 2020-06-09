import React, { useContext } from 'react';
import MenuBar from 'common/MenuBar';
import CreateList from './CreateList';
import Lists from './Lists';
import Button from 'common/Button';
import FooterBar from 'common/FooterBar';
import { TodoContext } from 'TodoContext';

const TodoLists = (props) => {
  const {state, dispatch} = useContext(TodoContext);
  const [renameFormOpen, setRenameFormOpen] = React.useState(false);

  const remove = () => {
    dispatch({
      type: 'DELETE_LIST'
    });
  }

  const update = (list) => {
    setRenameFormOpen(false);
    dispatch({
      type: 'UPDATE_LIST',
      payload: list 
    });
  }

  return (
    <>
      <Lists
        lists={state.lists}
        selectedLists={state.selectedLists}
        onRename={update}
        renameFormOpen={renameFormOpen}
      />
      <ListsFooter
        selectedLists={state.selectedLists}
        setRenameFormOpen={(value) => setRenameFormOpen(value)}
        onDelete={remove}
      />
    </>
  );
}

const ListsFooter = (props) => {
  return (
    <>
      {props.selectedLists.length > 0 &&
        <FooterBar>
          <Button
            label="Rename"
            onClick={() => props.setRenameFormOpen(true)}
            disabled={props.selectedLists > 1 ? false : true}
           />
          <Button
            className="warn"
            label="Delete"
            onClick={props.onDelete}
          />
        </FooterBar>
      }
    </>
  );
}

export default TodoLists;
