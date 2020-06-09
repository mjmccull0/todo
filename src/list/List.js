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
        toggleCheckbox={() => dispatch({type: 'SET_SELECTED_LISTS', listId: list.id})}
        checked={state.selectedLists.includes(list.id)}
      />
      <div className={styles.name_wrapper}
        onClick={() => dispatch({ type: 'SET_ACTIVE_LIST', payload: list.id })}
      >
        {list.name}
      </div>
    </div>
  )
}

export default List;
