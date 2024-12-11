import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkatsukiPageRoutingModule } from './akatsuki-routing.module';

import { AkatsukiPage } from './akatsuki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkatsukiPageRoutingModule
  ],
  declarations: [AkatsukiPage]
})
export class AkatsukiPageModule {}
