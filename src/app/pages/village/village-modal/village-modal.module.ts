import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VillageModalPageRoutingModule } from './village-modal-routing.module';
import { VillageModalPage } from './village-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillageModalPageRoutingModule
  ],
  declarations: [VillageModalPage]
})
export class VillageModalPageModule {}
