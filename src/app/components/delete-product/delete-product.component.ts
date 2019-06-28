import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

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
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  //Get product info and set product properties
  ngOnInit():void {
    this.product.id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProduct(this.product.id).subscribe(
      (product:Product) => this.product = product,
      (error:any) => console.log(error)
    );
  }

  //Delete product from DB
  delete():void{
    this.productService.deleteProduct(this.product.id);
    this.router.navigate(['/products']);
  }

}
