import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from 'src/app/models/cart';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private id : string | null = "";
  product : Product | null = null;
  cart : Cart | null = null;
  constructor(private productService : ProductService,private snackBar : MatSnackBar, private activatedRoute : ActivatedRoute, private cartService : CartService
  ) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;
    if(id)
    {
      this.productService.getProduct(id).subscribe(data =>
        this.product = data
      )
    }
    this.cartService.getCartProduct().subscribe(data => {
      this.cart = data;
    })
  }
  clicked(product : Product){

    console.log("Before adding into cart")
    this.cartService.addToCart(product.id).subscribe(
      () => {
        {this.snackBar.open("Product added successfully", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition : 'top'
        });}
      }
    )
    }
}
