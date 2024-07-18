import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import {MatCardModule} from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    ProductListComponentComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CartModule
  ]
})
export class ProductModule { }
