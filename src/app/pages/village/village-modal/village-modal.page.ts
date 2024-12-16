import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface Clan {
  name: string;
  leader: string;
  specialty: string;
  image: string;
}

interface Character {
  name: string;
  role: string;
  image: string;
}

interface Village {
  name: string;
  leader: string;
  symbol: string;
  characters: Character[];
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
