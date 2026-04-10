import { Injectable, signal, WritableSignal } from '@angular/core';
import { infoProductoI } from '../interfaces/info-usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList: WritableSignal<infoProductoI[]> = signal<infoProductoI[]>([
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
      price: 9.99,
      description: 'Popular mascara known for its volumizing and lengthening effects.',
      category: 'beauty',
      image: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
      rating: { rate: 4.2, count: 320 }
    },
    {
      id: 2,
      title: 'Eyeshadow Palette with Mirror',
      price: 19.99,
      description: 'Versatile range of eyeshadow shades for creating stunning eye looks.',
      category: 'beauty',
      image: 'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
      rating: { rate: 3.8, count: 180 }
    },
    {
      id: 3,
      title: 'Powder Canister',
      price: 14.99,
      description: 'Finely milled setting powder designed to set makeup and control shine.',
      category: 'beauty',
      image: 'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp',
      rating: { rate: 4.0, count: 95 }
    },
    {
      id: 4,
      title: 'Red Lipstick',
      price: 12.99,
      description: 'Classic and bold choice for adding a pop of color to your lips.',
      category: 'beauty',
      image: 'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
      rating: { rate: 4.7, count: 512 }
    },
    {
      id: 5,
      title: 'Red Nail Polish',
      price: 8.99,
      description: 'Rich and glossy red hue for vibrant and polished nails.',
      category: 'beauty',
      image: 'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp',
      rating: { rate: 3.5, count: 210 }
    },
    {
      id: 6,
      title: 'Calvin Klein CK One',
      price: 49.99,
      description: 'Classic unisex fragrance, known for its fresh and clean scent.',
      category: 'fragrances',
      image: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp',
      rating: { rate: 4.5, count: 430 }
    },
    {
      id: 7,
      title: 'Chanel Coco Noir Eau De',
      price: 129.99,
      description: 'Elegant and mysterious fragrance with notes of grapefruit, rose, and sandalwood.',
      category: 'fragrances',
      image: 'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp',
      rating: { rate: 4.8, count: 670 }
    },
    {
      id: 8,
      title: "Dior J'adore",
      price: 89.99,
      description: 'Luxurious and floral fragrance with a blend of ylang-ylang, rose, and jasmine.',
      category: 'fragrances',
      image: 'https://cdn.dummyjson.com/product-images/fragrances/dior-j%27adore/thumbnail.webp',
      rating: { rate: 4.6, count: 389 }
    }
  ]);

  constructor() { }

}
