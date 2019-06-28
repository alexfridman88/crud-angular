import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductComponent } from './components/product/product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';


//CRUD routing
const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component:ProductsComponent},
  {path: 'product/:id', component:ProductComponent},
  {path: 'add-product', component:AddProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent},
  {path: 'delete-product/:id', component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
