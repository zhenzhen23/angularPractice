import { Component, EventEmitter } from '@angular/core';
import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'inventory';
  products: Product[];

  constructor(){

    this.products = [
      new Product(
        "MYSHOES",
        "Black Running Shoes",
        "/assets/images/products/black-shoes.jpg",
        ["Man", "Shoes", "Running shoes"],
        109.99
      ),
      new Product(
        "NEATOJACKET",
        "Blue Jacket",
        "/assets/images/products/blue-jacket.jpg",
        ["Women", "Apparel", "Jackets & Vests"],
        238.99
      ),
      new Product(
        "NICEHAT",
        "A Nice Black Hat",
        "/assets/images/products/black-hat.jpg",
        ["Man", "Accessories", "Hat"],
        29.99
      )
    ];
    //let newProduct = new Product(
    //this.product = newProduct;
  }

  productWasSelected(product: Product): void {
    console.log("Product clicked: ", product);
  }
}


