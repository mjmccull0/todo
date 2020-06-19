import React from 'react';
import RenameListForm from 'list/RenameListForm'; 
import ListOverviewMenu from 'list/ListOverviewMenu';
import SearchButton from 'common/SearchButton';
import MenuBar from 'common/MenuBar';
import Header from 'common/Header';
import FooterBar from 'common/FooterBar';
import Button from 'common/Button';
import Checkbox from 'common/Checkbox';
import styles from './List.module.css';

const ListView = (props) => {
  const lists = props.lists.filter(list => {
    return (list.name.toLowerCase()).includes(props.query.toLowerCase());
  });
  return (
    <>
      <div className={styles.list_view}>
        {lists.map(list => (
          <List
            {...props}
            list={list}
            edit={props.editId === list.id ? true : false}
          />
        ))}
      </div>
    </>
  );
}

const GridView = (props) => {
  const lists = props.lists.filter(list => {
    return (list.name.toLowerCase()).includes(props.query.toLowerCase());
  });
  return (
    <>
      <Grid>
        {lists.map(list => (
          <GridItem
            key={list.id}
            list={list}
            {...props}
            edit={props.editId === list.id ? true : false}
          />
        ))}
      </Grid>
    </>
  );
}

const List = (props) => {
  if (props.selectMode) {
    return <ListSelect {...props} onListClick={props.onSelect} />
  }

  return (
    <ListContainer {...props}>
      <Reveal color={props.list.color}>
        <ListCheckbox {...props} />
      </Reveal>
      <ListName {...props} />
    </ListContainer>
  );
}

const ListSelect = (props) => {
  const {list, edit, exitListSelectMode, update} = {...props};

  return (
    <>
      <ListContainer>
        <ListCheckbox {...props} />
        <ListName {...props} />
      </ListContainer>
      {edit &&
        <RenameListForm
          list={list}
          update={update}
          cancel={exitListSelectMode}
        />
      }
    </>
  );
}

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


const ListContainer = ({children}) => (
  <div className={styles.list}>
    {children}
  </div>
)


const Grid = ({children}) => {
  return (
    <>
      <div className={styles.grid}>
        {children}
      </div>
    </>
  );
}

const GridItem = (props) => {
  const {list, edit, editId, exitListSelectMode, selectedLists, update} = {...props};

  let onListClick;
  if (props.selectMode) {
    onListClick = props.onSelect;
  } else {
    onListClick = props.onListClick;
  }


  return (
    <div className={styles.grid_item}>
      <div className={`
          ${styles.color_code}
          ${selectedLists.includes(list.id) ? styles.selected : ''}
        `}
         style={{background: `rgba(${list.color.r}, ${list.color.g}, ${list.color.b}`}}
         onClick={() => onListClick(list)}
      >
      </div>
      <ListName
        {...props}
        edit={editId === list.id ? true : false}
      />
      { edit &&
        <RenameListForm
          list={list}
          update={update}
          cancel={exitListSelectMode}
        />
      }
    </div>
  );
}

const ListMenuBar = (props) => {
  const [active, setActive] = React.useState(0);
  if (props.selectMode) {
    return <ListSelectModeMenuBar {...props} />
  }
  return (
    <ListOverviewMenu
      {...props}
      active={active}
      setActive={(value) => setActive(value)}
    />
  );
}

const ListSelectModeMenuBar = (props) => {
  return (
    <MenuBar
      center={
        <Header>Click a task list to select</Header>
      }
      right={
        <>
          <Button
            className="checkIcon"
            onClick={props.exitListSelectMode}
            active={true}
          />
          <SearchButton onClick={props.toggleSearch} active={props.search} />
          <Button
            label="Cancel"
            onClick={props.exitListSelectMode}
          />
        </>
      }
    />
  )
}

const ListSelectModeFooter = (props) => {
  const {selectMode, selectedLists, setEditId, remove} = {...props};

  if (selectMode) {
    return (
      <>
        <FooterBar>
          <Button
            label="Rename"
            onClick={() => setEditId(selectedLists[0])}
            disabled={selectedLists.length === 1 ? false : true}
           />
          <Button
            className="warn"
            label="Delete"
            onClick={remove}
            disabled={selectedLists.length > 0 ? false : true}
          />
        </FooterBar>
      </>
    );
  }
  return null;
}

const Reveal = ({children, color}) => (
  <>
    <div className={styles.reveal}>
      <div className={styles.control}>{children}</div>
      <div
        className={styles.color_code}
        style={{background: `rgba(${color.r}, ${color.g}, ${color.b}`}}
       >
      </div>
    </div>
  </>
)

export {
  List,
  ListSelect,
  ListView,
  GridView,
  ListSelectModeFooter,
  ListMenuBar
};
