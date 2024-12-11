import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KaraModalPageRoutingModule } from './kara-modal-routing.module';
import { KaraModalPage } from './kara-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaraModalPageRoutingModule
  ],
  declarations: [KaraModalPage]
})
export class KaraModalPageModule {}
