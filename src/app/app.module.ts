import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';  //Import forms module
import {environment} from '../environments/environment'; // Import connection settings
import {AngularFirestoreModule} from 'angularfire2/firestore'; //Import Firebase module 
import {AngularFireModule} from 'angularfire2'; //Import Firebase module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Import product components
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductComponent } from './components/product/product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    //Set product components
    AddProductComponent,
    ProductsComponent,
    EditProductComponent,
    ProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    //Set importing modules
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
