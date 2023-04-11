import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ResetPsswordComponent } from './resetPassword/reset-pssword.component';
import { ChangePasswordComponent } from './changePassword/change-pssword.component';


@NgModule({
  declarations: [
  
    ResetPsswordComponent,
       ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
