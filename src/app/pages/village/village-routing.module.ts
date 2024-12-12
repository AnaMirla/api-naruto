import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VillagePage } from './village.page';

const routes: Routes = [
  {
    path: '',
    component: VillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VillagePageRoutingModule {}
