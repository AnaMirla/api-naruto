import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';
import { CharacterDetailPage } from './character-detail.page';
import { CharacterModalComponent } from './character-modal/character-modal.component'; // Ruta corregida

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailPageRoutingModule
  ],
  declarations: [
    CharacterDetailPage,
    CharacterModalComponent // Declaramos el modal aquí
  ]
})
export class CharacterDetailPageModule {}
