import { Component, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonIcon, IonFooter, IonBadge, ModalController, AlertController } from '@ionic/angular/standalone';
import { ProductsService } from 'src/app/services/products.service';
import { CartItemI } from 'src/app/interfaces/info-usuario.interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [DecimalPipe, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonIcon, IonFooter, IonBadge]
})
export class CartComponent {

  private modalController = inject(ModalController);
  private alertController = inject(AlertController);
  private productsService = inject(ProductsService);

  get cartItems(): CartItemI[] {
    return this.productsService.cartItems();
  }

  get total(): number {
    return this.productsService.getCartTotal();
  }

  increase(productId: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      this.productsService.addToCart(item.product);
    }
  }

  decrease(productId: number): void {
    this.productsService.decreaseQuantity(productId);
  }

  async remove(item: CartItemI): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar del carrito',
      message: `¿Deseas eliminar "${item.product.title}" del carrito?`,
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
            this.productsService.removeFromCart(item.product.id);
          }
        }
      ]
    });
    await alert.present();
  }

  close(): void {
    this.modalController.dismiss();
  }

}
