import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellerPageRoutingModule } from './teller-routing.module';

import { TellerPage } from './teller.page';
import { ShopPage } from '../shop/shop.page';
import { ShopPageModule } from '../shop/shop.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellerPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [TellerPage],
  providers:[ShopPage]
})
export class TellerPageModule {}
