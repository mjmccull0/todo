import React from 'react';
import { SearchIcon } from 'common/Icons';
import TextInput from 'common/TextInput';
import Button from 'common/Button';
import styles from './Search.module.css';

const Search = (props) => {
  return (
    <>
      <SearchContainer>
        <SearchBox onCloseSearch={props.onCloseSearch} />
      </SearchContainer>
    </>
  );
}

const SearchContainer = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.container}> 
      {props.children} 
    </div>
  </div>
)

const SearchBox = (props) => (
  <>
    <SearchIcon />
    <TextInput className={styles.search_box} />
    <Close onClick={props.onCloseSearch} />
  </>
)

const Close = (props) => {
  return (
    <>
      <div className={styles.close}>
        <Button label="x" {...props} />
      </div>
    </>
  );
}

export default Search;
