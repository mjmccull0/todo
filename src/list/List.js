import React from 'react';
import Checkbox from 'common/Checkbox';
import styles from './List.module.css';

const List = (props) => {
  const {list} = {...props};
  return(
    <div className={styles.list}>
      <Checkbox
        toggleCheckbox={() => props.onSelect(list.id)}
        checked={props.selectedLists?.includes(list.id)}
      />
      <div className={styles.name_wrapper}
        onClick={() => props.onListClick(list)}
      >
        {list.name}
      </div>
    </div>
  )
}

export default List;
