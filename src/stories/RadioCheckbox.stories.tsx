import { useState } from 'react';
import RadioCheckboxGroup from 'components/RadioCheckboxButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from 'react-bootstrap/Form';

const milkList: { [key: string]: { name: string } } = {
  'milk-1': { name: 'Whole Milk' },
  'milk-2': { name: '2% Milk' },
  'milk-3': { name: 'Almond Milk' },
};

export default {
  title: 'Bobax/RadioCheckboxGroup',
  component: RadioCheckboxGroup,
} as ComponentMeta<typeof RadioCheckboxGroup>;

const Template: ComponentStory<typeof RadioCheckboxGroup> = (args) => (
  <RadioCheckboxGroup {...args} />
);

type Args = {
  type: 'radio' | 'checkbox';
  id: string;
  label: string;
};
export const SingleRadioButton = (args: Args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(true);
  };

  return (
    <Form>
      <RadioCheckboxGroup check={checked} handleChange={handleChange} {...args} />
    </Form>
  );
};

SingleRadioButton.args = {
  type: 'radio',
  id: 'milk-1',
  label: 'Oat Milk',
};

SingleRadioButton.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: ['radio', 'checkbox'],
    },
  },
  label: {
    control: 'text',
  },
};

type MultiArgs = {
  type: 'radio' | 'checkbox';
};
export const MultipleRadioButtons = (type: MultiArgs) => {
  const [selectedMilk, setSelectedMilk] = useState<string>('');

  return (
    <>
      <Form.Group>
        {Object.keys(milkList).map((key) => {
          const milkOption = milkList[key];
          return (
            <Template
              key={key}
              {...type}
              id={key}
              label={milkOption.name}
              handleChange={() => setSelectedMilk(key)}
              check={selectedMilk === key}
            />
          );
        })}
      </Form.Group>
    </>
  );
};

MultipleRadioButtons.args = {
  type: 'radio',
};

MultipleRadioButtons.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: ['radio', 'checkbox'],
    },
  },
  label: {
    control: 'text',
    defaultValue: 'Milk',
  },
};

export const MultipleCheckBoxButtons = (type: MultiArgs) => {
  const [selectedMilk, setSelectedMilk] = useState<string>('');

  return (
    <>
      <Form.Group>
        {Object.keys(milkList).map((key) => {
          const milkOption = milkList[key];
          return (
            <Template
              key={key}
              {...type}
              id={key}
              label={milkOption.name}
              handleChange={() => setSelectedMilk(key)}
              check={selectedMilk === key}
            />
          );
        })}
      </Form.Group>
    </>
  );
};

MultipleCheckBoxButtons.args = {
  type: 'radio',
};

MultipleCheckBoxButtons.argTypes = {
  type: {
    control: {
      type: 'radio',
      options: ['radio', 'checkbox'],
    },
  },
  label: {
    control: 'text',
    defaultValue: 'Milk',
  },
};
