import React from 'react';
import OverviewViewSelector from 'OverviewViewSelector';
import CreateList from 'list/CreateList';
import SearchButton from 'common/SearchButton';
import MenuBar from 'common/MenuBar';
import Button from 'common/Button';
import GridButton from 'common/GridButton';
import ListButton from 'common/ListButton';

const ListOverviewMenu = (props) => {
  const displaySelector = () => {
    switch (props.display) {
      case 'list':
        return <GridButton onClick={() => props.onDisplayChange('grid')} />;
      case 'grid':
        return <ListButton onClick={() => props.onDisplayChange('list')} />;
      default:
        return <GridButton onClick={() => props.onDisplayChange('grid')} />;
    }
  }

  return (
    <MenuBar
      left={
        <CreateList />
      }
      center={
        <OverviewViewSelector click={props.onSelectView} active={props.active} />
      }
      right={
        <>
          {displaySelector()}
          <Button onClick={props.enterListSelectMode} className="checkIcon" />
          <SearchButton onClick={props.toggleSearch} active={props.search} />
        </>
      }
    />
  );
}

export default ListOverviewMenu;
