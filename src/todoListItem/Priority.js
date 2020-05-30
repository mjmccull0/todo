import React from 'react';
import Select from 'common/Select';

const Priority = ({priority, ...props}) => {
  return (
    <div className="priority">
      <label>
        Priority
      </label>
      <Select value={priority} {...props} />
    </div>
  );
}

export default Priority;
