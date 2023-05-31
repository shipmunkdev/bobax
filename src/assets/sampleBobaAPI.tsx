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

interface ToppingListProps {
    uuid: string;
    name: string;
    price: number;
}

interface MilkListProps {
    uuid: string;
    name: string;
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

export const milkList: MilkListProps[] = [
    { uuid: 'b19dd65c-e087-4925-b041-35c4f45db7b3', name: 'Whole Milk' },
    { uuid: '17a9b305-a9b6-49ea-afb9-0c0f4fa3d24e', name: '2% Milk' },
    { uuid: 'd3b993b0-41ed-4ea7-9348-f1c9b31308f9', name: 'Almond Milk' },
    { uuid: '081c423a-8348-4886-ad5f-1237b3b44487', name: 'Soy Milk' },
    { uuid: '7077e01b-3aa8-4fd0-9e0f-3fc0e1fb5b03', name: 'Oat Milk' },
];

export const toppingsList: ToppingListProps[] = [
    { uuid: 'da44e5cd-0356-42b7-9934-f55ed686cba1', name: 'Boba', price: 0.5 },
    { uuid: 'bbeaaac3-b674-4c34-a570-48fbd4851703', name: 'Popping Boba', price: 0.5 },
    { uuid: '1ecaf461-81fd-4149-b3f3-4a676187d832', name: 'Aloe Vera', price: 0.5 },
    { uuid: 'b6f11955-21e4-469e-8f14-3955e93a5fcf', name: 'Lychee Jelly', price: 0.5 },
    { uuid: '6e0a98fd-b16d-4187-a2b5-7b9c1e6ce538', name: 'Coconut Jelly', price: 1 },
    { uuid: '7468e630-eba8-4f7e-9ac4-4c8afb501728', name: 'Red Bean', price: 1 },
    { uuid: '8243fd45-aaa4-4f09-9cc2-ae0f4d92141c', name: 'Mango Jelly', price: 1 },
    { uuid: 'b3bf4c1c-72e0-45c1-b5bd-5086bc678749', name: 'Pudding', price: 1.5 },
    { uuid: '61a5f7c4-442f-45b2-9c35-71c8590ca69c', name: 'Milk Foam', price: 1.5 },
    { uuid: '27d76081-7b4a-4330-8093-bd736f33af2c', name: 'Jelly', price: 0.5 },
];
