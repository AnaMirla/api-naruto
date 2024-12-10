import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalClanPage } from '../clanes/modal-clan/modal-clan.page';

@Component({
  selector: 'app-clanes',
  templateUrl: './clanes.page.html',
  styleUrls: ['./clanes.page.scss'],
})
export class ClanesPage {

  clans: string[] = ['Aburame', 'Uchiha', 'Senju', 'Uzumaki', 'Hyuga'];

  constructor(private modalController: ModalController) { }

  async openClanModal(clan: string) {
    const modal = await this.modalController.create({
      component: ModalClanPage,
      componentProps: { clan }
    });
    return await modal.present();
  }
}
