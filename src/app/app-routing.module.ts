import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"",component:RegisterComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"cart", canActivate:[AuthGuard],component:CartComponent},
  {path:"products",canActivate:[AuthGuard],component:ProductsComponent},
  {path:"categories",canActivate:[AuthGuard],component:CategoriesComponent},
  {path:"brands",canActivate:[AuthGuard],component:BrandsComponent},
  {path:"productDetails/:id",canActivate:[AuthGuard],component:ProductDetailsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
