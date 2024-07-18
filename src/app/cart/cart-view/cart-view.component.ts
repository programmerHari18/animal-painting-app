import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from 'src/app/models/cart';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';



@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit{
  getTotalPrice() : number{
    var price : number = 0;
    this.products.forEach(product => {
      price += product.price;
    })
    return price;
  }
  checkoutCart(){
    if(this.products.length == 0){
      this.snackBar.open("Cannot checkout","", {
        duration: 2000,
        horizontalPosition : 'right',
        verticalPosition : 'top'
      })
      return
    }
    else{
      this.snackBar.open("Cart checked out Successfully","", {
        duration: 2000,
        horizontalPosition : 'right',
        verticalPosition : 'top'
      })
      return
    }
  }
  public products : Product[] = [];
  cart : Cart | null = null;
  totalPrice : number = 0;

  constructor(private cartService : CartService, private snackBar : MatSnackBar) {}
  loadCart() {
    this.cartService.getCartProduct().subscribe(
      (cart) => {
        this.cart = cart;
        cart.cartItems.forEach(item => {
          this.products.push(item.product);
        });
        console.log(this.products);
        this.totalPrice = this.getTotalPrice();
      },
      (error) => {
        console.error('Error loading cart:', error);
      }
    );
  }
  ngOnInit(): void {
    this.loadCart();
  }
  clearCart() {
    this.cartService.deleteCart().subscribe(
      () => {
        this.cart = {id: '',cartItems: []};
        this.products = [];
        this.totalPrice = 0;
        this.snackBar.open("Cart cleared successfully", "" ,{
          duration: 2000,
          horizontalPosition : 'right',
          verticalPosition : 'top'
        })
      },
      (error) => {
        console.log('Error clearing cart : ', error);
        this.snackBar.open("Something error while clearing cart", "" ,{
          duration: 2000,
          horizontalPosition : 'right',
          verticalPosition : 'top'
        })
      }
    )
  }
  addToCart(productId : string){
    this.cartService.addToCart(productId).subscribe(
      () => {
        console.log(productId);
        this.loadCart();
        {this.snackBar.open("Product added successfully", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition : 'top'
        });}
      },
      (error) => {
        console.log("Error adding to cart : ", error);
        {this.snackBar.open("Something error while adding product", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition : 'top'
        });}
      }
    )

  }
}
