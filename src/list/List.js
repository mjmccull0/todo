import React from 'react';
import Checkbox from 'common/Checkbox';
import styles from './List.module.css';

const ListView = (props) => (
  <ListContainer {...props}>
    <Reveal>
      <ListCheckbox {...props} />
    </Reveal>
    <ListName {...props} />
  </ListContainer>
)

const ListSelect = (props) => (
  <ListContainer {...props}>
    <ListCheckbox {...props} />
    <ListName {...props} />
  </ListContainer>
)

const ListName = ({list, onListClick}) => (
  <div className={styles.name_wrapper}
    onClick={() => onListClick(list)}
  >
    {list.name}
  </div>
)

const ListCheckbox = ({list, onSelect, selectedLists}) => (
  <Checkbox
    toggleCheckbox={() => onSelect(list)}
    checked={selectedLists?.includes(list.id)}
  />
)


const ListContainer = (props) => (
  <div className={styles.list}>
    {props.children}
  </div>
)

const Reveal = (props) => (
  <>
    <div className={styles.reveal}>
      <div className={styles.control}>{props.children}</div>
      <div className={styles.color_code}>
      </div>
    </div>
  </>
)

export { ListView, ListSelect };
