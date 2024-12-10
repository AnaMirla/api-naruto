import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CharacterDetailPage } from '../character-detail/character-detail.page'; // Asegúrate de importar la página

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'character-detail', // Ruta a la página de detalles del personaje
    component: CharacterDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
