import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Define el tipo ClanData para que contenga objetos con más información sobre los personajes
type ClanData = {
  Aburame: { name: string; image: string }[];
  Uchiha: { name: string; image: string }[];
  Senju: { name: string; image: string }[];
  Uzumaki: { name: string; image: string }[];
  Hyuga: { name: string; image: string }[];
};

type Clan = 'Aburame' | 'Uchiha' | 'Senju' | 'Uzumaki' | 'Hyuga';

@Component({
  selector: 'app-modal-clan',
  templateUrl: './modal-clan.page.html',
  styleUrls: ['./modal-clan.page.scss'],
})
export class ModalClanPage {
  @Input() clan: Clan = 'Aburame';

  clanData: ClanData = {
    Aburame: [
      { name: 'Shino Aburame', image: 'assets/clanes/Aburame/shino.png' },
      { name: 'Muta Aburame', image: 'assets/clanes/Aburame/muta.jpg' },
    ],
    Uchiha: [
      { name: 'Itachi Uchiha', image: 'assets/clanes/Uchiha/itachi.png' },
      { name: 'Sasuke Uchiha', image: 'assets/clanes/Uchiha/Sasuke.jpg' },
    ],
    Senju: [
      { name: 'Hashirama Senju', image: 'assets/clanes/Senju/Hashirama.jpg' },
      { name: 'Tobirama Senju', image: 'assets/clanes/Senju/Tobirama.jpg' },
    ],
    Uzumaki: [
      { name: 'Naruto Uzumaki', image: 'assets/clanes/Uzumukai/Naruto.jpg' },
      { name: 'Kushina Uzumaki', image: 'assets/clanes/Uzumukai/Kushina.jpg'},
    ],
    Hyuga: [
      { name: 'Hinata Hyuga', image: 'assets/clanes/Hyuga/Hinata.jpg' },
      { name: 'Neji Hyuga', image: 'assets/clanes/Hyuga/Neji.jpg' },
    ],
  };

  constructor(private modalController: ModalController) {}

  getCharacters() {
    return this.clanData[this.clan] || [];
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
