//  Raw sample data for BobaList component
export interface BobaProps {
    id: string;
    name: string;
    description: string;
    price: number;
    imageLink: string;
    options: {
        milk: { name: string };
        toppings: Array<{ name: string; price: number }>;
    };
}

interface ToppingProps {
    name: string;
    price: number;
}

interface MilkProps {
    uuid: string;
    name: string;
}

interface ToppingListProps {
    [key: string]: ToppingProps;
}

export const bobaList: BobaProps[] = [
    {
        id: 'bobax-1',
        name: 'Pandan Caramel Matcha',
        description:
            'Our organic premium-grade matcha from Tea People layered over your choice of milk and signature pandan caramel; a sweet and creamy caramel with fragrant hints of pandan and coconut. A sweet and caffeinated treat!',
        price: 6.5,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p936_i3_w1400.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [{ name: 'Boba', price: 0.5 }],
        },
    },
    {
        id: 'bobax-2',
        name: 'Grape Oolong',
        description:
            'A blend of grape, apple and lime, combined with vanilla notes of Tie Guan Yin from Tea People. Slightly tart with a beautifully deep purple hue to match the new season.',
        price: 5.35,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p1074_i1_w1400.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [
                { name: 'Boba', price: 0.5 },
                { name: 'Mango Jelly', price: 0.75 },
            ],
        },
    },
    {
        id: 'bobax-3',
        name: 'Korean Banana Milk',
        description:
            'Creamy and uniquely sweet - it is our elevated take on Korea boxed Banana Milk. All-natural, housemade banana jam paired with oat milk. Dairy and caffeine-free.',
        price: 5.95,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p806_i2_w1600.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [
                { name: 'Boba', price: 0.5 },
                { name: 'Pudding', price: 0.5 },
            ],
        },
    },
    {
        id: 'bobax-4',
        name: 'Matcha Latte',
        description:
            'Our organic premium-grade matcha from Tea People layered over your choice of milk and sweetener.',
        price: 5.75,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p784_i2_w1600.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [{ name: 'Boba', price: 0.5 }],
        },
    },
    {
        id: 'bobax-5',
        name: 'Black Sugar Hojicha',
        description:
            'Our organic hojicha powder from Tea People is a roasted green tea that’s low in caffeine but high in toastiness. Our housemade kuromitsu syrup compliments the nutty flavor of hojicha.',
        price: 5.35,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p845_i2_w5507.jpeg?width=2560&dpr=2',
        options: {
            milk: { name: 'Oat Milk' },
            toppings: [{ name: 'Boba', price: 0.5 }],
        },
    },
    {
        id: 'bobax-6',
        name: 'Strawberry Fields',
        description:
            'Your choice of milk layered over our housemade strawberry puree. A tasty treat for kids and the kid in you.',
        price: 5.75,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p1043_i1_w1600.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [
                { name: 'Boba', price: 0.5 },
                { name: 'Aloe Vera', price: 0.75 },
            ],
        },
    },
    {
        id: 'bobax-8',
        name: 'Strawberry Jasmine',
        description: 'A refreshing blend of strawberries and jasmine green tea.',
        price: 5.45,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p1132_i2_w1600.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [
                { name: 'Boba', price: 0.5 },
                { name: 'Popping Boba', price: 0.75 },
            ],
        },
    },
    {
        id: 'bobax-9',
        name: 'Berry Hibiscus',
        description: 'A tart and fruity drink fused with strawberry, mint and hibiscus tea.',
        price: 5.35,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p1046_i2_w2048.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [
                { name: 'Boba', price: 0.5 },
                { name: 'Popping Boba', price: 0.75 },
            ],
        },
    },
    {
        id: 'bobax-10',
        name: 'Dirty Horchata',
        description:
            'A shot of Proyecto Diaz espresso layered over our horchata. Contains caffeine.',
        price: 7.1,
        imageLink:
            'https://boba-guys.square.site/uploads/1/2/6/1/126110068/s634804415629712800_p871_i2_w1600.jpeg?dpr=2',
        options: {
            milk: { name: 'Whole Milk' },
            toppings: [
                { name: 'Milk Foam', price: 1.0 },
                { name: 'Pudding', price: 0.5 },
            ],
        },
    },
];

export const milkList: MilkProps[] = [
    { uuid: 'b19dd65c-e087-4925-b041-35c4f45db7b3', name: 'Whole Milk' },
    { uuid: '17a9b305-a9b6-49ea-afb9-0c0f4fa3d24e', name: '2% Milk' },
    { uuid: 'd3b993b0-41ed-4ea7-9348-f1c9b31308f9', name: 'Almond Milk' },
    { uuid: '081c423a-8348-4886-ad5f-1237b3b44487', name: 'Soy Milk' },
    { uuid: '7077e01b-3aa8-4fd0-9e0f-3fc0e1fb5b03', name: 'Oat Milk' },
];

export const toppingsList: ToppingListProps = {
    'topping-1': { name: 'Boba', price: 0.5 },
    'topping-2': { name: 'Popping Boba', price: 0.5 },
    'topping-3': { name: 'Aloe Vera', price: 0.5 },
    'topping-4': { name: 'Lychee Jelly', price: 0.5 },
    'topping-5': { name: 'Coconut Jelly', price: 1 },
    'topping-6': { name: 'Red Bean', price: 1 },
    'topping-7': { name: 'Mango Jelly', price: 1 },
    'topping-8': { name: 'Pudding', price: 1.5 },
    'topping-9': { name: 'Milk Foam', price: 1.5 },
    'topping-10': { name: 'Jelly', price: 0.5 },
};
