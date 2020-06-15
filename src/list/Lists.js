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
  const lists = props.lists.filter(list => {
    return (list.name.toLowerCase()).includes(props.query.toLowerCase());
  });
  return (
    <>
      <ul className={styles.user_lists}>
        {lists?.map(list => (
          <li key={list.id}>
            <ListView list={list} {...props}  />
          </li>
        ))}
      </ul>
    </>
  );
}

const Grid = (props) => {
  return (
    <>
      <div className={styles.grid}>
        {props.lists.map(list => (
          <GridItem
            key={list.id}
            list={list}
            onListClick={props.onListClick}
            onSelect={props.enterListSelectMode}
            selectedLists={props.selectedLists}
          />
        ))}
      </div>
    </>
  );
}

const GridItem = (props) => {
  return (
    <div className={styles.grid_item}
      onClick={() => props.onListClick(props.list)}
    >
      <div
        className={`
          ${styles.color_code}
          ${props.selectedLists.includes(props.list.id) ? styles.selected : ''}
        `}
        style={{background: `rgba(${props.list.color.r}, ${props.list.color.g}, ${props.list.color.b}`}}
      >
      </div>
      <div className={styles.list_name}>
        {props.list.name}
      </div>
    </div>
  );
}

export { Grid, Lists, SelectLists };
