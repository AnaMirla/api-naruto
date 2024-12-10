import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClanesPage } from './clanes.page';

const routes: Routes = [
  {
    path: '',
    component: ClanesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClanesPageRoutingModule {}
