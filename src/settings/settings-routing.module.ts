import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './changePassword/change-pssword.component';
import { ResetPsswordComponent } from './resetPassword/reset-pssword.component';

const routes: Routes = [
  {path:"",redirectTo:"changePassword",pathMatch:'full'},
  {path:"changePassword",component:ChangePasswordComponent},
  {path:"resetPassword",component:ResetPsswordComponent},
  {path:"cart",loadChildren:()=>import('../cart/cart.module').then((x)=>x.CartModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
