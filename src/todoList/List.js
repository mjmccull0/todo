import React from 'react';
import Checkbox from 'common/Checkbox';
import styles from './List.module.css';

const List = ({list, onSelectList, onListClick, ...props}) => {

  return(
    <div className={styles.list}>
      <Checkbox
        toggleCheckbox={() => onSelectList(list)}
        checked={props.selectedLists.includes(list.id)}
      />
      <div className={styles.name_wrapper}
        onClick={() => onListClick(list.id)}
      >
        {list.name}
      </div>
    </div>
  )
}

export default List;
