import Form from 'react-bootstrap/Form';
import React from 'react';

interface RadioButtonProps {
  type: 'radio' | 'checkbox';
  id: string;
  label: string;
  check: boolean;
  disabled?: boolean;
  handleChange: (value: string) => void;
}

const RadioCheckboxGroup = ({
  type,
  id,
  label,
  check,
  disabled,
  handleChange,
}: RadioButtonProps) => {
  return (
    <Form.Check
      type={type}
      id={id}
      label={label}
      checked={check}
      disabled={disabled}
      onChange={(e) => handleChange(e.target.id)}
    />
  );
};
export default RadioCheckboxGroup;
