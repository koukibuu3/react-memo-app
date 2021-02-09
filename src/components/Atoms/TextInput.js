import React from 'react';
import { TextField } from '@material-ui/core';

const TextInput = (props) => {
  return (
    <TextField
      label={props.label}
      required={props.required}
      maxLength={props.maxLength}
    />
  );
};

export default TextInput;
