import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkatsukiPage } from './akatsuki.page';

const routes: Routes = [
  {
    path: '',
    component: AkatsukiPage
  },  {
    path: 'akatsuki-modal',
    loadChildren: () => import('./akatsuki-modal/akatsuki-modal.module').then( m => m.AkatsukiModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkatsukiPageRoutingModule {}
