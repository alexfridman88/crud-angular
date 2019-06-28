import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  //Set default properties with using Product Interface
  product:Product = {
    id: '',
    pname:'',
    description:'',
    price: 0 
  }

  //Set product CRUD service, routing and routing request
  constructor(
    private productService:ProductService,
    private router:Router,
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

  //Update product info
  edit({value}:{value:Product}):void{
    value.id = this.product.id;
    this.productService.updateProduct(value);
    this.router.navigate(['products'])
  }

}
