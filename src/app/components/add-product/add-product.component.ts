import { Component, inject } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonContent, IonGrid, IonRow, IonCol, IonItem, IonInput, IonText, ModalController, IonIcon } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { infoProductoI } from 'src/app/interfaces/info-usuario.interfaces';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonContent, IonGrid, IonRow, IonCol, IonItem, IonInput, IonText, FormsModule]
})
export class AddProductComponent {

  private modalController = inject(ModalController);

  private randomImages: string[] = [
    'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp',
    'https://cdn.dummyjson.com/product-images/fragrances/dior-j%27adore/thumbnail.webp'
  ];

  newProduct: infoProductoI = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 }
  };

  setRandomImage() {
    const index = Math.floor(Math.random() * this.randomImages.length);
    this.newProduct.image = this.randomImages[index];
  }

  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  confirm() {
    this.modalController.dismiss(this.newProduct, 'confirm');
  }

}
