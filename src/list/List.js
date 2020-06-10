import React, { useContext } from 'react';
import { TodoContext } from 'TodoContext';
import Checkbox from 'common/Checkbox';
import styles from './List.module.css';

const List = (props) => {
  const {list} = {...props};
  const {state, dispatch} = useContext(TodoContext);
  return(
    <div className={styles.list}>
      <Checkbox
        toggleCheckbox={() => props.onSelect(list.id)}
        checked={props.selectedLists?.includes(list.id)}
      />
      <div className={styles.name_wrapper}
        onClick={() => props.onListClick(list.id)}
      >
        {list.name}
      </div>
    </div>
  )
}

export default List;
