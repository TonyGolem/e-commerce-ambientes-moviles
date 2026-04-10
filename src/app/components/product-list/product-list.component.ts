import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonGrid, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonChip, IonLabel, IonCard, IonCardHeader, IonCardContent, IonBadge, ModalController } from '@ionic/angular/standalone';
import { infoProductoI } from 'src/app/interfaces/info-usuario.interfaces';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonSearchbar, IonButton, IonIcon, IonChip, IonLabel, IonCard, IonCardHeader, IonCardContent, IonBadge]
})
export class ProductListComponent {

  @Input() products: infoProductoI[] = [];
  @Output() productAdded = new EventEmitter<infoProductoI>();

  searchQuery: string = '';

  get filteredProducts(): infoProductoI[] {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) return this.products;
    return this.products.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  private modalController = inject(ModalController);

  async openAddProductModal() {
    const modal = await this.modalController.create({
      component: AddProductComponent
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.productAdded.emit(data);
    }
  }

}
