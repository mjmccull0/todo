import React from 'react';
import ArrowButton from 'common/ArrowButton';
import styles from './TodoItemsMenu.module.css';

const TodoItemsMenu = (props) => (
  <div className={styles.header_menu}>
    <ArrowButton direction="left" onClick={props.goBackToLists} />
  </div>
)

export default TodoItemsMenu;
