import React, { useState } from 'react';
import RadioCheckboxGroup from 'components/RadioButton';
import { milkList } from 'assets/sampleBobaAPI';
import Form from 'react-bootstrap/Form';

export default {
  title: 'Bobax/RadioCheckboxGroup',
  component: RadioCheckboxGroup,
};

export const SingleRadioButton = (): JSX.Element => {
  const [milk, setMilk] = useState<string>('');
  return (
    <>
      <RadioCheckboxGroup
        type={'radio'}
        id={'milk-1'}
        label={'Oat Milk'}
        handleChange={setMilk}
        check={milk === 'milk-1'}
      />
    </>
  );
};

export const MultipleRadioButtons = (): JSX.Element => {
  const [milk, setMilk] = useState<string>('');
  return (
    <>
      <Form.Group>
        {Object.keys(milkList).map((key) => {
          const milkOption = milkList[key];
          return (
            <RadioCheckboxGroup
              type={'radio'}
              id={key}
              key={key}
              label={milkOption.name}
              check={milk === key}
              handleChange={setMilk}
            />
          );
        })}
      </Form.Group>
    </>
  );
};
