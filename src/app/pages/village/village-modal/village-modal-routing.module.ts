import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillageModalPage } from './village-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VillageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillageModalPageRoutingModule {}
