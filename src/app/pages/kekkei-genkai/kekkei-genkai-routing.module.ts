import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KekkeiGenkaiPage } from './kekkei-genkai.page';

const routes: Routes = [
  {
    path: '',
    component: KekkeiGenkaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KekkeiGenkaiPageRoutingModule {}
