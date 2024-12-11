import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AkatsukiModalPage } from './akatsuki-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AkatsukiModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AkatsukiModalPageRoutingModule {}
