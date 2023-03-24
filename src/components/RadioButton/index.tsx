import { MilkListProps } from 'types/common/main';
import Form from 'react-bootstrap/Form';
import React from 'react';

interface RadioButton {
  milkList: MilkListProps;
  milk: string;
  setMilk: (milk: string) => void;
}

const CustomizeRadioButton = ({ milkList, milk, setMilk }: RadioButton) => {
  return (
    <>
      {Object.keys(milkList).map((key) => {
        const milkOption = milkList[key];
        return (
          <div key={key}>
            <Form.Check
              type={'radio'}
              id={`milk-${key}`}
              label={milkOption.name}
              value={milkOption.name}
              onChange={(e) => {
                setMilk(e.target.value);
              }}
              checked={milk === milkOption.name}
            />
          </div>
        );
      })}
    </>
  );
};

export default CustomizeRadioButton;
