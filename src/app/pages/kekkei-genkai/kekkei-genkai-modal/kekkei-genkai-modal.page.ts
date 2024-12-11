import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kekkei-genkai-modal',
  templateUrl: './kekkei-genkai-modal.page.html',
  styleUrls: ['./kekkei-genkai-modal.page.scss'],
})
export class KekkeiGenkaiModalPage {
  @Input() kekkei: any;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
