import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalClanPage } from './modal-clan.page';  // Importamos el componente

const routes: Routes = [
  {
    path: '',
    component: ModalClanPage  // Asignamos el componente a la ruta principal
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalClanPageRoutingModule {}
