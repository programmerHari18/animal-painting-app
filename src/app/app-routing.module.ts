import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product/product-list-component/product-list-component.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { CartCheckoutComponent } from './cart/cart-checkout/cart-checkout.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch:'full'},
  {path: 'products', component: ProductListComponentComponent},
  {path:'cart', component: CartViewComponent},
  {path: 'checkout', component:CartCheckoutComponent},
  {path: 'products/:id', component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
