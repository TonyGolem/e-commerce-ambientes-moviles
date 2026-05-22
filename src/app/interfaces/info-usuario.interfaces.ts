export interface infoProductoI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

export interface CartItemI {
  product: infoProductoI;
  quantity: number;
}
