import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KekkeiGenkaiPage } from './kekkei-genkai.page';

const routes: Routes = [
  {
    path: '',
    component: KekkeiGenkaiPage
  },
  {
    path: 'kekkei-genkai-modal',
    loadChildren: () => import('./kekkei-genkai-modal/kekkei-genkai-modal.module').then(m => m.KekkeiGenkaiModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KekkeiGenkaiPageRoutingModule {}
