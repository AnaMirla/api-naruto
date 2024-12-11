import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KaraPageRoutingModule } from './kara-routing.module';
import { KaraPage } from './kara.page';
import { KaraModalPageModule } from './kara-modal/kara-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaraPageRoutingModule,
    KaraModalPageModule
  ],
  declarations: [KaraPage]
})
export class KaraPageModule {}
