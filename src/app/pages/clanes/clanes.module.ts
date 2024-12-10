import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule
import { ClanesPage } from './clanes.page';
import { ModalClanPage } from './modal-clan/modal-clan.page';
import { ClanesPageRoutingModule } from './clanes-routing.module'; // Se agrega este import

@NgModule({
  declarations: [ClanesPage, ModalClanPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClanesPageRoutingModule, // Importar el routing
  ],
})
export class ClanesPageModule {}

