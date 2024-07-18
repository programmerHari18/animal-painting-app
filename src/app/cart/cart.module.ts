import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import {MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatListModule} from'@angular/material/list';

import {MatButtonModule} from'@angular/material/button';
import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';




@NgModule({
  declarations: [
    CartViewComponent,
    CartCheckoutComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CartModule { }
