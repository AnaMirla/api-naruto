import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KaraPage } from './kara.page';

const routes: Routes = [
  {
    path: '',
    component: KaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KaraPageRoutingModule {}
