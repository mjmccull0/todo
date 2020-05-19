import React from 'react';

const Checkbox = ({checked, toggleCheckbox}) => {
  return (
    <>
      <input type="checkbox"
        onChange={toggleCheckbox}
        checked={checked}
      />
    </>
  )
};

Checkbox.defaultProps = {
  checked: false
};

export default Checkbox;
