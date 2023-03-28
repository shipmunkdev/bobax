import Form from 'react-bootstrap/Form';
import React from 'react';

interface RadioButton {
  type: 'radio' | 'checkbox';
  id: string;
  label: string;
  handleChange: (value: string) => void;
  check: boolean;
}

const RadioCheckboxGroup = ({ type, id, label, handleChange, check }: RadioButton) => {
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
