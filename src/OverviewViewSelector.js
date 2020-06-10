import React from 'react';
import Button from 'common/Button';

const OverviewViewSelector = ({click}) => (
  <>
    <Button label="List" onClick={click} value="0" />
    <Button label="Today" onClick={click} value="1" />
    <Button label="Scheduled" onClick={click} value="2" />
  </>
)

export default OverviewViewSelector;
