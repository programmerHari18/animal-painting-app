import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})

export class ProductListComponentComponent implements OnInit{

  products : Product[] = [];
  filteredProduct: Product[] = [];
  sortOrder: string = "";
  routerLink: any;
  constructor(private productService : ProductService, private cartService: CartService,
     private router : Router
  ){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProduct = data;
    })
  }



  applyFilter(event : Event){
    let searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProduct = this.products.filter(product => product.name.toLowerCase().includes(searchTerm));
    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string){
    this.sortOrder = sortValue;

    if(this.sortOrder === "priceLowHigh"){
      this.filteredProduct.sort((a,b) => a.price - b.price);
    } else if(this.sortOrder === "priceHighLow"){
      this.filteredProduct.sort((a,b) => b.price - a.price);
    }
  }

  navigateToOtherPage(product : Product){
    this.router.navigate(['/products/'+product.id]);
  }

}
