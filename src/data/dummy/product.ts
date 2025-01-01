export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Shoes',
    price: 100,
    description: 'This is a pair of shoes',
    imageUrl: 'https://placehold.co/50'
  },
  {
    id: 2,
    name: 'Shirt',
    price: 50,
    description: 'This is a shirt',
    imageUrl: 'https://placehold.co/50'
  },
  {
    id: 3,
    name: 'Pants',
    price: 75,
    description: 'This is a pair of pants',
    imageUrl: 'https://placehold.co/50'
  }
]