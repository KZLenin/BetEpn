import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpswPageRoutingModule } from './forgotpsw-routing.module';

import { ForgotpswPage } from './forgotpsw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpswPageRoutingModule
  ],
  declarations: [ForgotpswPage]
})
export class ForgotpswPageModule {}
