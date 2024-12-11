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
    { name: 'Itachi Uchiha', image: 'link_to_image1', clan: 'Uchiha' },
    { name: 'Kisame Hoshigaki', image: 'link_to_image2', clan: 'Hoshigaki' },
    { name: 'Deidara', image: 'link_to_image3', clan: 'Unknown' },
    { name: 'Sasori', image: 'link_to_image4', clan: 'Puppet Clan' },
    { name: 'Pain', image: 'link_to_image5', clan: 'Uzumaki' },
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
