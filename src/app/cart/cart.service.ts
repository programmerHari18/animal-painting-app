import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../models/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl + '/cart';
  private checkoutUrl = environment.apiUrl + '/checkout';

  constructor(private http: HttpClient) { }
  addToCart(productId : string ) : Observable<void>{
    var body = {
      productId: productId,
  };
    return this.http.post<void>(this.apiUrl, body);
  }
  getCartProduct() : Observable<Cart> {
    return this.http.get<Cart>(this.apiUrl);
  }

  deleteCart() : Observable<void> {
    return this.http.delete<void>(this.apiUrl);
  }

}
export class Body{
  productId : string = "";
}
