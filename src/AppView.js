import React from 'react';

const AppView = (props = {}) => {
  return (
    <div className="app">
      {props.children}
    </div>
  );
}

export default AppView;
