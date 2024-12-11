import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KaraModalPage } from './kara-modal/kara-modal.page';

@Component({
  selector: 'app-kara',
  templateUrl: './kara.page.html',
  styleUrls: ['./kara.page.scss'],
})
export class KaraPage {
  karaMembers = [
    { name: 'Jigen', image: 'assets/kara/jigen.jpg', clan: 'Kara' },
    { name: 'Kashin Koji', image: 'assets/kara/kashin-koji.jpg', clan: 'Kara' },
    { name: 'Delta', image: 'assets/kara/delta.jpg', clan: 'Kara' },
    { name: 'Amado', image: 'assets/kara/amado.jpg', clan: 'Kara' },
    { name: 'Boro', image: 'assets/kara/boro.jpg', clan: 'Kara' }
  ];

  constructor(private modalController: ModalController) {}

  async openModal(member: any) {
    const modal = await this.modalController.create({
      component: KaraModalPage,
      componentProps: { member }
    });
    return await modal.present();
  }
}
