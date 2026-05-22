import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonChip, IonLabel, IonCard, IonCardHeader, IonCardContent, IonSpinner, IonBadge, ModalController } from '@ionic/angular/standalone';
import { infoProductoI } from 'src/app/interfaces/info-usuario.interfaces';
import { AddProductComponent } from '../add-product/add-product.component';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [FormsModule, IonGrid, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonChip, IonLabel, IonCard, IonCardHeader, IonCardContent, IonSpinner, IonBadge]
})
export class ProductListComponent implements OnInit {

  private modalController = inject(ModalController);
  private productsService = inject(ProductsService);

  searchQuery: string = '';

  get loading(): boolean {
    return this.productsService.loading();
  }

  get cartCount(): number {
    return this.productsService.getCartCount();
  }

  ngOnInit(): void {
    this.productsService.loadProducts();
  }

  get filteredProducts(): infoProductoI[] {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) return this.productsService.productsList();
    return this.productsService.productsList().filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  addToCart(product: infoProductoI): void {
    this.productsService.addToCart(product);
  }

  async openCartModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: CartComponent
    });
    await modal.present();
  }

  async openAddProductModal(): Promise<void> {
    const modal = await this.modalController.create({
      component: AddProductComponent
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm' && data) {
      this.productsService.addProduct(data);
    }
  }

  filterItemByCategory(category: string): void {
    this.searchQuery = category;
  }

}
