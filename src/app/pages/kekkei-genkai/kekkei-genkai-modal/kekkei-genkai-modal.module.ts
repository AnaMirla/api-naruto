import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { KekkeiGenkaiModalPageRoutingModule } from './kekkei-genkai-modal-routing.module';
import { KekkeiGenkaiModalPage } from './kekkei-genkai-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KekkeiGenkaiModalPageRoutingModule
  ],
  declarations: [KekkeiGenkaiModalPage]
})
export class KekkeiGenkaiModalPageModule {}
