import React from 'react';

const TextInput = (props) => {
  return (
    <>
      <label>
        {props.label}
      </label>
      <input type="text" {...props} />
    </>
  );
}

export default TextInput;
