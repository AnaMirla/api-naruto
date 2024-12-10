import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar esto
import { ModalClanPage } from './modal-clan.page';

@NgModule({
  declarations: [ModalClanPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Inclúyelo aquí
  ],
})
export class ModalClanPageModule {}
