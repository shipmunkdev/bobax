import React from 'react';
import Form from 'react-bootstrap/Form';

interface RadioCheckboxGroupProps {
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
}: RadioCheckboxGroupProps) => {
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
