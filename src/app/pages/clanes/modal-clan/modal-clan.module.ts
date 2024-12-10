import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalClanPage } from './modal-clan.page';
import { IonicModule } from '@ionic/angular';
import { ModalClanPageRoutingModule } from './modal-clan-routing.module';  // Importamos las rutas

@NgModule({
  imports: [
    CommonModule,  // Necesario para usar directivas como ngIf, ngFor
    IonicModule,   // Necesario para los componentes de Ionic como ion-card, ion-button, etc.
    ModalClanPageRoutingModule  // Importamos las rutas configuradas
  ],
  declarations: [ModalClanPage],  // Declaramos el componente
  exports: [ModalClanPage]  // Exportamos el componente para que pueda ser utilizado
})
export class ModalClanPageModule {}
