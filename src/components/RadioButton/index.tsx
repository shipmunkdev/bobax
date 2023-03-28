import Form from 'react-bootstrap/Form';
import React from 'react';

interface RadioButton {
  type: 'radio' | 'checkbox';
  id: string;
  label: string;
  check: boolean;
  handleChange: (value: string) => void;
}

const RadioCheckboxGroup = ({ type, id, label, check, handleChange }: RadioButton) => {
  return (
    <Form.Check
      type={type}
      id={id}
      label={label}
      onChange={(e) => handleChange(e.target.id)}
      checked={check}
    />
  );
};
export default RadioCheckboxGroup;
