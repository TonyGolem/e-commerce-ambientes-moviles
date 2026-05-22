import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProductoI, CartItemI } from '../interfaces/info-usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';
  private CUSTOM_KEY = 'ecommerce_custom_products';

  loading: WritableSignal<boolean> = signal(false);
  productsList: WritableSignal<infoProductoI[]> = signal([]);
  private customProductsList: WritableSignal<infoProductoI[]> = signal([]);
  cartItems: WritableSignal<CartItemI[]> = signal([]);

  constructor() {
    this.loadCustomProductsFromStorage();
  }

  private loadCustomProductsFromStorage(): void {
    const stored = localStorage.getItem(this.CUSTOM_KEY);
    if (stored) {
      this.customProductsList.set(JSON.parse(stored));
    }
  }

  private saveCustomProductsToStorage(): void {
    localStorage.setItem(this.CUSTOM_KEY, JSON.stringify(this.customProductsList()));
  }

  loadProducts(): void {
    this.loading.set(true);
    this.http.get<infoProductoI[]>(this.apiUrl).subscribe({
      next: (apiProducts) => {
        this.productsList.set([...apiProducts, ...this.customProductsList()]);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  getCustomProducts() {
    return this.customProductsList.asReadonly();
  }

  getProducts() {
    return this.productsList.asReadonly();
  }

  addProduct(newProduct: infoProductoI): void {
    newProduct.id = Date.now();
    newProduct.rating = { rate: 0, count: 0 };
    this.customProductsList.update(list => [...list, newProduct]);
    this.saveCustomProductsToStorage();
    this.productsList.update(list => [...list, newProduct]);
  }

  updateProduct(updated: infoProductoI): void {
    this.productsList.update(list => list.map(p => p.id === updated.id ? updated : p));
    const isCustom = this.customProductsList().some(p => p.id === updated.id);
    if (isCustom) {
      this.customProductsList.update(list => list.map(p => p.id === updated.id ? updated : p));
      this.saveCustomProductsToStorage();
    }
  }

  deleteProduct(id: number): void {
    this.productsList.update(list => list.filter(p => p.id !== id));
    this.customProductsList.update(list => list.filter(p => p.id !== id));
    this.saveCustomProductsToStorage();
  }

  addToCart(product: infoProductoI): void {
    const existing = this.cartItems().find(item => item.product.id === product.id);
    if (existing) {
      this.cartItems.update(items =>
        items.map(item => item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
      );
    } else {
      this.cartItems.update(items => [...items, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems.update(items => items.filter(i => i.product.id !== productId));
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems().find(i => i.product.id === productId);
    if (item && item.quantity === 1) {
      this.removeFromCart(productId);
    } else {
      this.cartItems.update(items =>
        items.map(i => i.product.id === productId
          ? { ...i, quantity: i.quantity - 1 }
          : i
        )
      );
    }
  }

  getCartCount(): number {
    return this.cartItems().reduce((acc, item) => acc + item.quantity, 0);
  }

  getCartTotal(): number {
    return this.cartItems().reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

}
