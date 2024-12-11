import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KekkeiGenkaiPageRoutingModule } from './kekkei-genkai-routing.module';

import { KekkeiGenkaiPage } from './kekkei-genkai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KekkeiGenkaiPageRoutingModule
  ],
  declarations: [KekkeiGenkaiPage]
})
export class KekkeiGenkaiPageModule {}
