import React from 'react';

const Select = (props) => (
    <select {...props}>
      <option value="none">None</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
)

Select.defaultProps = {
  value: "none"
};

export default Select;
