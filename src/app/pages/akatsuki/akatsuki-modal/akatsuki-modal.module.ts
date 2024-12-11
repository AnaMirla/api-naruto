import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkatsukiModalPageRoutingModule } from './akatsuki-modal-routing.module';

import { AkatsukiModalPage } from './akatsuki-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkatsukiModalPageRoutingModule
  ],
  declarations: [AkatsukiModalPage]
})
export class AkatsukiModalPageModule {}
