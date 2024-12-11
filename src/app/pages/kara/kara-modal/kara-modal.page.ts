import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kara-modal',
  templateUrl: './kara-modal.page.html',
  styleUrls: ['./kara-modal.page.scss'],
})
export class KaraModalPage {
  @Input() member: any;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
