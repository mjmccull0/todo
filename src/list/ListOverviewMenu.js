import React from 'react';
import OverviewViewSelector from 'OverviewViewSelector';
import CreateList from 'list/CreateList';
import SearchButton from 'common/SearchButton';
import MenuBar from 'common/MenuBar';
import Button from 'common/Button';

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
        <Button onClick={props.enterListSelectMode} className="checkIcon" />
        <SearchButton />
      </>
    }
  />
)

export default ListOverviewMenu;
