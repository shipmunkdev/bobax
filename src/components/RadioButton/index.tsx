import Form from 'react-bootstrap/Form';
import React from 'react';

interface RadioButton {
  type: 'radio' | 'checkbox';
  id: string;
  label: string;
  handlechange: (value: string) => void;
  check: boolean;
}

const CustomizeRadioButton = ({ type, id, label, handlechange, check }: RadioButton) => {
  return (
    <div key={id}>
      <Form.Check
        type={type}
        id={id}
        label={label}
        onChange={(e) => handlechange(e.target.id)}
        checked={check}
      />
    </div>
  );
};
export default CustomizeRadioButton;
