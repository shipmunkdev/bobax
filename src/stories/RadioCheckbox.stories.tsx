import { useState } from 'react';
import RadioCheckboxGroup from 'components/RadioCheckboxButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from 'react-bootstrap/Form';

const milkList: { [key: string]: { name: string } } = {
  'milk-1': { name: 'Whole Milk' },
  'milk-2': { name: '2% Milk' },
  'milk-3': { name: 'Almond Milk' },
};

const toppingsList: { [key: string]: { name: string; price: number } } = {
  'topping-1': { name: 'Boba', price: 0.5 },
  'topping-2': { name: 'Popping Boba', price: 0.5 },
  'topping-3': { name: 'Aloe Vera', price: 0.5 },
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
    },
  },
  label: {
    control: 'text',
  },
};

export const SingleCheckBoxButton = (args: Args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Form>
      <RadioCheckboxGroup check={checked} handleChange={handleChange} {...args} />
    </Form>
  );
};

SingleCheckBoxButton.args = {
  type: 'checkbox',
  id: 'milk-1',
  label: 'Oat Milk',
};

SingleCheckBoxButton.argTypes = {
  type: {
    control: {
      type: 'checkbox',
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
              {...type}
              id={key}
              key={key}
              label={milkOption.name}
              check={selectedMilk === key}
              handleChange={() => setSelectedMilk(key)}
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
  const [selectedToppings, setSelectedToppings] = useState<{ [key: string]: boolean }>({});

  const checkBoxHandler = (option: string) => {
    if (selectedToppings[option]) {
      setSelectedToppings({ ...selectedToppings, [option]: !selectedToppings[option] });
    } else {
      setSelectedToppings({ ...selectedToppings, [option]: true });
    }
  };

  return (
    <>
      <Form.Group>
        {Object.keys(toppingsList).map((key) => {
          const toppingOptions = toppingsList[key];
          return (
            <Template
              {...type}
              id={key}
              key={key}
              label={toppingOptions.name}
              check={selectedToppings[key] ? selectedToppings[key] : false}
              handleChange={checkBoxHandler}
            />
          );
        })}
      </Form.Group>
    </>
  );
};

MultipleCheckBoxButtons.args = {
  type: 'checkbox',
};

MultipleCheckBoxButtons.argTypes = {
  type: {
    control: {
      type: 'checkbox',
      options: ['radio', 'checkbox'],
    },
  },
  label: {
    control: 'text',
    defaultValue: 'Boba',
  },
};

export const MultipleCheckBoxButtonsdisabled = (type: MultiArgs) => {
  const [selectedToppings, setSelectedToppings] = useState<{ [key: string]: boolean }>({});

  const checkBoxHandler = (option: string) => {
    if (selectedToppings[option]) {
      setSelectedToppings({ ...selectedToppings, [option]: !selectedToppings[option] });
    } else {
      setSelectedToppings({ ...selectedToppings, [option]: true });
    }
  };

  return (
    <>
      <Form.Group>
        {Object.keys(toppingsList).map((key) => {
          const toppingOptions = toppingsList[key];
          return (
            <Template
              {...type}
              id={key}
              key={key}
              label={toppingOptions.name}
              check={selectedToppings[key] ? selectedToppings[key] : false}
              disabled={toppingOptions.name == 'Boba'}
              handleChange={checkBoxHandler}
            />
          );
        })}
      </Form.Group>
    </>
  );
};

MultipleCheckBoxButtonsdisabled.args = {
  type: 'checkbox',
};

MultipleCheckBoxButtonsdisabled.argTypes = {
  type: {
    control: {
      type: 'checkbox',
      options: ['radio', 'checkbox'],
    },
  },
  label: {
    control: 'text',
    defaultValue: 'Boba',
  },
};
