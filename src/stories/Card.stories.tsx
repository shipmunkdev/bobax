import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import BobaCard from 'components/Card';

export default {
    title: 'BobaX/BobaCard',
    component: BobaCard,
} as ComponentMeta<typeof BobaCard>;

const Template: ComponentStory<typeof BobaCard> = (args) => <BobaCard {...args} />;

const DrinkOneData = {
    id: 'bobax-3',
    name: 'Korean Banana Milk',
    description:
        'Creamy and uniquely sweet - it is our elevated take on Korea boxed Banana Milk. All-natural, housemade banana jam paired with oat milk. Dairy and caffeine-free.',
    price: 5.95,
    imageLink:
        'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p806_i2_w1600.jpeg?dpr=2',
    defaultOptions: {
        milk: 'Whole Milk',
        toppings: [
            { name: 'Boba', price: 0.5 },
            { name: 'Pudding', price: 0.5 },
        ],
    },
};

export const DrinkOneCard = Template.bind({});
DrinkOneCard.args = {
    product: DrinkOneData,
};

const DrinkTwoData = {
    id: 'bobax-9',
    name: 'Berry Hibiscus',
    description: 'A tart and fruity drink fused with strawberry, mint and hibiscus tea.',
    price: 5.35,
    imageLink:
        'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p1046_i2_w2048.jpeg?dpr=2',
    defaultOptions: {
        milk: 'Whole Milk',
        toppings: [
            { name: 'Boba', price: 0.5 },
            { name: 'Popping Boba', price: 0.75 },
        ],
    },
};

export const DrinkTwoCard = Template.bind({});
DrinkTwoCard.args = {
    product: DrinkTwoData,
};
