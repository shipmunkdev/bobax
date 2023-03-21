export interface BobaProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageLink: string;
  defaultOptions?: {
    milk: string;
    toppings: Array<{ name: string; price: number }>;
  };
}

export interface OrderProps {
  order: BobaProps[];
  setOrder: (order: BobaProps[]) => void;
}

export interface CartItemCountProps {
  cartItemsCount: number;
}

export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

export interface CustomizeBobaModalProps {
  bobaInfoModal: BobaProps;
  modalShow: boolean;
  onHide: () => void;
}

export interface ToppingsProps {
  name: string,
  price: number;
}

export interface MilkProps {
  name: string,
  price: number
}

export interface MilkList {
  [key:string]: {
    name: string,
    price: number}
}

export interface ToppingList {
  [key:string]:{
    name: string,
    price: number;}
}
