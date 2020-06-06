import React from 'react';
import ArrowButton from 'common/ArrowButton';

const BackButton = (props) => (
  <ArrowButton direction="left" onClick={props.goBackToLists} />
)

export default BackButton;
