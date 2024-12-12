import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsModalPage } from './teams-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsModalPageRoutingModule {}
