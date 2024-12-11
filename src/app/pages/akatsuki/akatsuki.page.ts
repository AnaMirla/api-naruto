import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AkatsukiModalPage } from './akatsuki-modal/akatsuki-modal.page';

@Component({
  selector: 'app-akatsuki',
  templateUrl: './akatsuki.page.html',
  styleUrls: ['./akatsuki.page.scss'],
})
export class AkatsukiPage {
  akatsukiMembers = [
    { name: 'Itachi Uchiha', image: 'assets/clanes/naruto/uchiha/itachi.jpg', clan: 'Uchiha' },
    { name: 'Kisame Hoshigaki', image: 'assets/clanes/naruto/akasuki/kisamen.jpg', clan: 'Hoshigaki' },
    { name: 'Deidara', image: 'assets/clanes/naruto/akasuki/deidara.jpg', clan: 'Unknown' },
    { name: 'Sasori', image: 'assets/clanes/naruto/akasuki/sasori.jpg', clan: 'Puppet Clan' },
    { name: 'Pain', image: 'assets/clanes/naruto/akasuki/pain.jpg', clan: 'Uzumaki' },
  ];

  constructor(private modalController: ModalController) {}

  async openModal(member: any) {
    const modal = await this.modalController.create({
      component: AkatsukiModalPage,
      componentProps: { member },
    });
    await modal.present();
  }
}
