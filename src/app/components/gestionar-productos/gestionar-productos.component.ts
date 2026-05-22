import { Component, inject } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonButton, IonIcon, IonBadge, IonLabel, ModalController, AlertController } from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/services/products.service';
import { infoProductoI } from 'src/app/interfaces/info-usuario.interfaces';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-gestionar-productos',
  templateUrl: './gestionar-productos.component.html',
  styleUrls: ['./gestionar-productos.component.css'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonButton, IonIcon, IonBadge, IonLabel]
})
export class GestionarProductosComponent {

  private modalController = inject(ModalController);
  private alertController = inject(AlertController);
  private productsService = inject(ProductsService);

  get customProducts(): infoProductoI[] {
    return this.productsService.getCustomProducts()();
  }

  async editProduct(product: infoProductoI): Promise<void> {
    const modal = await this.modalController.create({
      component: AddProductComponent,
      componentProps: { product: { ...product } }
    });
    await modal.present();
    const { data, role } = await modal.onWillDismiss();
    if (role === 'confirm' && data) {
      this.productsService.updateProduct(data);
    }
  }

  async deleteProduct(product: infoProductoI): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar producto',
      message: `¿Estás seguro de que deseas eliminar "${product.title}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'alert-btn-cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          cssClass: 'alert-btn-danger',
          handler: () => {
            this.productsService.deleteProduct(product.id);
          }
        }
      ]
    });
    await alert.present();
  }

}
