import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaraModalPage } from './kara-modal.page';

const routes: Routes = [
  {
    path: '',
    component: KaraModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaraModalPageRoutingModule {}
