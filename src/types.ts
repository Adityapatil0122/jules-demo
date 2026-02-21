export interface IceCream {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartItem extends IceCream {
  quantity: number;
}
