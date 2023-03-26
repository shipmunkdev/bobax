import { ModalOptionProps } from 'types/common/main';
import Form from 'react-bootstrap/Form';
import React from 'react';

interface RadioButton {
  type: 'radio' | 'checkbox';
  key: string;
  OptionList: ModalOptionProps;
  option: string | string[];
  setOption: (option: string | string[]) => void;
}

const CustomizeRadioButton = ({ type, key, OptionList, option, setOption }: RadioButton) => {
  const handleOptionChange = (optionValue: string) => {
    if (type === 'radio') {
      setOption(optionValue);
    } else if (type === 'checkbox') {
      if (Array.isArray(option)) {
        if (option.includes(optionValue)) {
          setOption(option.filter((value) => value !== optionValue));
        } else {
          setOption([...option, optionValue]);
        }
      } else {
        setOption([optionValue]);
      }
    }
  };
  return (
    <div key={key}>
      <Form.Check
        type={type}
        id={key}
        label={OptionList.name}
        onChange={() => handleOptionChange(OptionList.name)}
        checked={
          Array.isArray(option) ? option.includes(OptionList.name) : option === OptionList.name
        }
      />
    </div>
  );
};
export default CustomizeRadioButton;
