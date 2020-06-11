import React from 'react';
import List from './List';
import RenameListForm from './RenameListForm';
import styles from './Lists.module.css';

const Lists = (props) => {
  let selectedList = props.selectedList;
  if (props.lists?.length === 0) {
    return null;
  }

  if (props.selectedLists?.length === 1) {
    [selectedList] = props?.lists.filter(list => list.id === props.selectedLists[0]);
  }

  const renameTodoList = (list) => {
    props.onRename(list);
  }

  return (
    <>
      <ul className={styles.user_lists}>
        {props.lists?.map(list => (
          <li key={list.id}>
            <List list={list} {...props}  />
            {props.renameFormOpen && selectedList && selectedList.id === list.id &&
              <RenameListForm
                list={selectedList}
                cancel={() => {props.setRenameFormOpen(false)}}
                rename={renameTodoList}
              />
            }
          </li>
        ))}
      </ul>
    </>
  );
}

export default Lists;
