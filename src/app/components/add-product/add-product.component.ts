import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  //Set product CRUD service and routing
  constructor(
    private productService:ProductService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  //Add new product to DB
  addProduct({value}:{value:Product}):void{
    this.productService.addProduct(value);
    this.router.navigate(['products']);
  }

}
