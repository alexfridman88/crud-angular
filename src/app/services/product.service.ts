import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Set default properties with using Interface from Angular modules
  productCollection: AngularFirestoreCollection<Product>;
  productDoc: AngularFirestoreDocument<Product>;
  products: Observable<Product[]>;
  product: Observable<Product>;


  //Set AngularFirestore class and sort collection
  constructor(
    private angularFirestore: AngularFirestore
  ) {
   this.productCollection = this.angularFirestore.collection('products', ref => ref.orderBy('pname', 'asc'));
  }

  //Get all products info from DB
  getProducts(): Observable<Product[]> {
    this.products = this.productCollection.snapshotChanges().pipe(
      map(products => {
        return products.map(product => {
          const data = product.payload.doc.data() as Product;
          data.id = product.payload.doc.id;
          return data;
        });
      })
    );
    return this.products;
  }

  //Get product info from DB
  getProduct(id: string): Observable<Product> {
    this.productDoc = this.angularFirestore.doc<Product>(`products/${id}`);
    this.product = this.productDoc.snapshotChanges().pipe(
      map(product => {
        if (product.payload.exists === false) {
          return null;
        } else {
          const data = product.payload.data() as Product;
          data.id = product.payload.id;
          return data;
        }
      })
    );
    return this.product;
  }

  //Add new product to DB
  addProduct(product: Product):void {
    this.productCollection.add(product);
  } 

  //Update product info
  updateProduct(product: Product):void {
    this.productDoc = this.angularFirestore.doc(`products/${product.id}`);
    this.productDoc.update(product);
  }

  //Delete product from DB
  deleteProduct(id:string):void {
    this.productDoc = this.angularFirestore.doc(`products/${id}`);
    this.productDoc.delete();
  }

}