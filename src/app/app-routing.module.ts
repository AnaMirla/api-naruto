import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'character-detail',
    loadChildren: () =>
      import('./pages/character-detail/character-detail.module').then(
        m => m.CharacterDetailPageModule
      )
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'clanes',
    loadChildren: () => import('./pages/clanes/clanes.module').then(m => m.ClanesPageModule)
  },
  {
    path: 'kara',
    loadChildren: () => import('./pages/kara/kara.module').then(m => m.KaraPageModule)
  },
  {
    path: 'akatsuki',
    loadChildren: () => import('./pages/akatsuki/akatsuki.module').then(m => m.AkatsukiPageModule)
  },
  {
    path: 'kekkei-genkai',
    loadChildren: () => import('./pages/kekkei-genkai/kekkei-genkai.module').then(m => m.KekkeiGenkaiPageModule)
  },
  // Ruta para manejar páginas no encontradas (opcional).
  {
    path: '**',
    redirectTo: 'intro',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
