import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Button from 'components/Button';

export default {
    title: 'BobaX/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const AddToCart = Template.bind({});
AddToCart.args = {
    variant: 'primary',
    label: 'Add to Cart',
};

export const Customize = Template.bind({});
Customize.args = {
    variant: 'info',
    label: 'Customize',
};

export const Checkout = Template.bind({});
Checkout.args = {
    variant: 'primary',
    label: 'Checkout',
};

export const Cancel = Template.bind({});
Cancel.args = {
    variant: 'secondary',
    label: 'Cancel',
};
