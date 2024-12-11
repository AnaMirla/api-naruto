import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TailedBeatsPage } from './tailed-beats.page';

const routes: Routes = [
  {
    path: '',
    component: TailedBeatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TailedBeatsPageRoutingModule {}
