import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TailedBeatsPageRoutingModule } from './tailed-beats-routing.module';
import { TailedBeatsPage } from './tailed-beats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TailedBeatsPageRoutingModule
  ],
  declarations: [TailedBeatsPage]
})
export class TailedBeatsPageModule {}
