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
  handleChange,
  disabled,
}: RadioButtonProps) => {
  return (
    <Form.Check
      disabled={disabled}
      type={type}
      id={id}
      label={label}
      checked={check}
      onChange={(e) => handleChange(e.target.id)}
    />
  );
};
export default RadioCheckboxGroup;
