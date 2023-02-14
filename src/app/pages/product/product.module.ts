import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { NgSelectModule} from '@ng-select/ng-select';
import { ShopPage } from '../shop/shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    
    
    
  ],
  declarations: [ProductPage],
 providers:[ShopPage]
})
export class ProductPageModule {}
