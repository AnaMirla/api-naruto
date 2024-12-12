import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamsModalPageRoutingModule } from './teams-modal-routing.module';
import { TeamsModalPage } from './teams-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsModalPageRoutingModule
  ],
  declarations: [TeamsModalPage]
})
export class TeamsModalPageModule {}
