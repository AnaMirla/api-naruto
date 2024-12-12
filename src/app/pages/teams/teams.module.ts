import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamsPageRoutingModule } from './teams-routing.module';
import { TeamsPage } from './teams.page';
import { TeamsModalPage } from '../teams/teams-modal/teams-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamsPageRoutingModule
  ],
  declarations: [TeamsPage, TeamsModalPage]
})
export class TeamsPageModule { }