import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-akatsuki-modal',
  templateUrl: './akatsuki-modal.page.html',
  styleUrls: ['./akatsuki-modal.page.scss'],
})
export class AkatsukiModalPage {
  @Input() member: any;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
