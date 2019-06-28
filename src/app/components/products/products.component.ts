import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //Set default properties with using Product Interface
  products:Product[]=[];

  //Set product CRUD service
  constructor(
    private productService:ProductService
  ) { }

  //Get products info and set products properties
  ngOnInit():void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => this.products = products, 
      (error: any) => console.log(error))
  }
}
