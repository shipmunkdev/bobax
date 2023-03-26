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

export interface CustomizeBobaModalProps {
  bobaInfoModal: BobaProps;
  modalShow: boolean;
  onHide: () => void;
}

export interface ModalOptionProps {
  name: string;
}

export interface MilkListProps {
  [key: string]: {
    name: string;
  };
}

export interface ToppingListProps {
  [key: string]: {
    name: string;
  };
}
