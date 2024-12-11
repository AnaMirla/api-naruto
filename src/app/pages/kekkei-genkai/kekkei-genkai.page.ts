import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KekkeiGenkaiModalPage } from './kekkei-genkai-modal/kekkei-genkai-modal.page';

@Component({
  selector: 'app-kekkei-genkai',
  templateUrl: './kekkei-genkai.page.html',
  styleUrls: ['./kekkei-genkai.page.scss'],
})
export class KekkeiGenkaiPage {

  kekkeiGenkaiList: any[] = [
    {
      name: 'Sharingan',
      description: 'Habilidad ocular del clan Uchiha',
      image: 'assets/clanes/naruto/Sharingan.png', // Asegúrate de tener la URL correcta
      users: [
        { name: 'Sasuke Uchiha', clan: 'Uchiha', image: 'assets/clanes/naruto/uchiha/sasuke.jpg' },
        { name: 'Itachi Uchiha', clan: 'Uchiha', image: 'assets/clanes/naruto/uchiha/itachi.jpg' }
      ]
    },
    {
      name: 'Byakugan',
      description: 'Habilidad ocular del clan Hyuga',
      image: 'assets/clanes/naruto/Byakugan.png',
      users: [
        { name: 'Hinata Hyuga', clan: 'Hyuga', image: 'assets/clanes/naruto/hyuga/hinata.jpg' },
        { name: 'Neji Hyuga', clan: 'Hyuga', image: 'assets/clanes/naruto/hyuga/neji.jpg' }
      ]
    },
    {
      name: 'Rinnegan',
      description: 'Habilidad ocular de los Otsutsuki',
      image: 'assets/clanes/naruto/rinnegan.png',
      users: [
        { name: 'Nagato', clan: 'Otsutsuki', image: 'assets/clanes/naruto/nagato.png' },
        { name: 'Sasuke Uchiha', clan: 'Uchiha', image: 'assets/clanes/naruto/uchiha/sasuke.jpg' }
      ]
    }
  ];

  constructor(private modalController: ModalController) {}

  async openModal(kekkei: any) {
    const modal = await this.modalController.create({
      component: KekkeiGenkaiModalPage,
      componentProps: { kekkei }
    });
    await modal.present();
  }
}
