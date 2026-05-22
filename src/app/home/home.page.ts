import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTabBar, IonTabButton, IonIcon, IonTab, IonTabs } from '@ionic/angular/standalone';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { GestionarProductosComponent } from '../components/gestionar-productos/gestionar-productos.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTabs, IonTab, IonIcon, IonTabButton, IonTabBar, IonHeader, IonToolbar, IonTitle, IonContent, ProductListComponent, GestionarProductosComponent],
})
export class HomePage {}
