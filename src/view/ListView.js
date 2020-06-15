import React, { useState } from 'react';
import ListOverviewMenu from 'list/ListOverviewMenu';
import { Lists } from 'list/Lists';
import Search from 'list/Search';

import styles from './ListView.module.css';

const ListView = (props) => {
  const [searchMode, setSearchMode] = useState(false);
  const [query, setQuery] = useState('');

  const closeSearch = () => {
    setSearchMode(false);
  }

  return (
    <>
      <ListOverviewMenu
        onSelectView={props.change}
        onSearch={() => setSearchMode(!searchMode)}
        gridMode={() => props.setGrid(true)}
        listMode={() => props.setGrid(false)}
        grid={props.grid}
        {...props}
      />
      {searchMode &&
        <Search
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onCloseSearch={closeSearch}
        />
      }
      { props.grid 
        ? <Grid 
            lists={props.lists}
            query={query}
            onListClick={props.onListClick}
            onSelect={props.enterListSelectMode}
          />
        : <Lists
            lists={props.lists}
            query={query}
            onListClick={props.onListClick}
            onSelect={props.enterListSelectMode}
            grid={props.grid}
          />
      }
    </>
  );
}

const Grid = (props) => {
  const lists = props.lists.filter(list => {
    return (list.name.toLowerCase()).includes(props.query.toLowerCase());
  });
  return (
    <>
      <div className={styles.grid}>
        {lists.map(list => (
          <GridItem
            key={list.id}
            list={list}
            onListClick={props.onListClick}
            onSelect={props.enterListSelectMode}
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
      <div className={styles.color_code}
        style={{background: `rgba(${props.list.color.r}, ${props.list.color.g}, ${props.list.color.b}`}}
      >
      </div>
      <div className={styles.list_name}>
        {props.list.name}
      </div>
    </div>
  );
}

export default ListView;
