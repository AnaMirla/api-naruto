import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanesPage } from './clanes.page';
import { IonicModule } from '@ionic/angular';
import { ClanesPageRoutingModule } from './clanes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ClanesPageRoutingModule
  ],
  declarations: [ClanesPage],
  exports: [ClanesPage]
})
export class ClanesPageModule {}
