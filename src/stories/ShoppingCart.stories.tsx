import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import ShoppingCart from 'components/ShoppingCart';

export default {
    title: 'BobaX/ShoppingCart',
    component: ShoppingCart,
} as ComponentMeta<typeof ShoppingCart>;

const Template: ComponentStory<typeof ShoppingCart> = (args) => <ShoppingCart {...args} />;

export const Default = Template.bind({});
Default.args = {
    cartItemsCount: 0,
};

export const WithItems = Template.bind({});
WithItems.args = {
    cartItemsCount: 3,
};
