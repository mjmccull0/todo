import React, { useState } from 'react';
import List from './List';
import FooterBar from 'common/FooterBar';
import Button from 'common/Button';
import RenameListForm from './RenameListForm';
import styles from './Lists.module.css';

const Lists = (props = {lists: []}) => {
  const [renameFormOpen, setRenameFormOpen] = useState(false);
  let selectedList = null;
  if (props.lists.length === 0) {
    return null;
  }

  if (props.selectedLists.length === 1) {
    [selectedList] = props.lists.filter(list => list.id === props.selectedLists[0]);
  }

  const renameTodoList = (list) => {
    props.onRenameTodoList(list);
    setRenameFormOpen(false);
  }

  return (
    <>
      <ul className={styles.user_lists}>
        {props.lists.map(list => (
          <li key={list.id}>
            <List list={list} {...props} />
            {renameFormOpen && selectedList && selectedList.id === list.id &&
              <RenameListForm
                list={selectedList}
                cancel={() => {setRenameFormOpen(false)}}
                rename={renameTodoList}
              />
            }
          </li>
        ))}
      </ul>
      <FooterBar>
        <Button
          label="Rename"
          onClick={() => {setRenameFormOpen(true)}}
          disabled={selectedList ? false : true}
         />
        <Button label="Delete" onClick={props.onDeleteTodoLists} />
      </FooterBar>
    </>
  );
}

export default Lists;
