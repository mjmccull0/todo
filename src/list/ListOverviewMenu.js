import React from 'react';
import OverviewViewSelector from 'OverviewViewSelector';
import CreateList from 'list/CreateList';
import SearchButton from 'common/SearchButton';
import MenuBar from 'common/MenuBar';
import Button from 'common/Button';
import GridButton from 'common/GridButton';
import ListButton from 'common/ListButton';

const ListOverviewMenu = (props) => (
  <MenuBar
    left={
      <CreateList />
    }
    center={
      <OverviewViewSelector click={props.onSelectView} />
    }
    right={
      <>
        {props.grid
          ? <ListButton onClick={props.listMode} />
          : <GridButton onClick={props.gridMode} />
        }
        <Button onClick={props.enterListSelectMode} className="checkIcon" />
        <SearchButton onClick={props.onSearch} />
      </>
    }
  />
)

export default ListOverviewMenu;
