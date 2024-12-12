import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VillagePageRoutingModule } from './village-routing.module';
import { VillagePage } from './village.page';
import { VillageModalPage } from '../village/village-modal/village-modal.page';
import { VillageModalPageModule } from './village-modal/village-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillagePageRoutingModule,
    VillageModalPageModule
  ],
  declarations: [VillagePage]
})
export class VillagePageModule {}
