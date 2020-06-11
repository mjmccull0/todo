import React from 'react';
import { ListView, ListSelect } from './List';
import RenameListForm from './RenameListForm';
import styles from './Lists.module.css';

const SelectLists = (props) => {
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
            <ListSelect list={list} {...props}  />
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

const Lists = (props) => {
  return (
    <>
      <ul className={styles.user_lists}>
        {props.lists?.map(list => (
          <li key={list.id}>
            <ListView list={list} {...props}  />
          </li>
        ))}
      </ul>
    </>
  );
}

export { Lists, SelectLists };
