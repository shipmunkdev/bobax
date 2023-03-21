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

export interface CustomizeBobaModalProps {
  bobaInfoModal: BobaProps;
  modalShow: boolean;
  onHide: () => void;
}
