import React from 'react';

const Select = (props) => {
  return (
    <select>
      <option selected value="none">None</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
}

export default Select;
