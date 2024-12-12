import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface Village {
  name: string;
  leader: string;
  clans: { name: string; leader: string; specialty: string }[];
}

@Component({
  selector: 'app-village-modal',
  templateUrl: './village-modal.page.html',
  styleUrls: ['./village-modal.page.scss'],
})
export class VillageModalPage {
  @Input() village!: Village;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
