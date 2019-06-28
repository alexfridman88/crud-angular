import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Set default properties with using Product Interface
  product:Product = {
    id: '',
    pname:'',
    description:'',
    price: 0 
  }

  //Set product CRUD service and routing request
  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) { }

  //Get product info and set product properties
  ngOnInit():void {
    this.product.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.product.id).subscribe(
      (product:Product) => this.product = product,
      (error:any) => console.log(error)
    );
  }

}
