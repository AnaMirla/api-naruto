import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VillageModalPage } from '../village/village-modal/village-modal.page';

interface Village {
  name: string;
  leader: string;
  symbol: string;
  clans: { name: string; leader: string; specialty: string }[];
}

@Component({
  selector: 'app-village',
  templateUrl: './village.page.html',
  styleUrls: ['./village.page.scss'],
})

export class VillagePage {
  villages: Village[] = [
    {
      name: 'Konohagakure',
      leader: 'Hokage (Naruto Uzumaki)',
      symbol: 'https://link-a-imagen-simbolo-konoha.com',
      clans: [
        { name: 'Uchiha', leader: 'Sasuke Uchiha', specialty: 'Sharingan' },
        { name: 'Senju', leader: 'Tobirama Senju', specialty: 'Chakra de la naturaleza' },
        { name: 'Hyuga', leader: 'Hiashi Hyuga', specialty: 'Byakugan' }
      ]
    },
    {
      name: 'Sunagakure',
      leader: 'Kazekage (Gaara)',
      symbol: 'https://link-a-imagen-simbolo-sunagakure.com',
      clans: [
        { name: 'Kazekage Clan', leader: 'Rasa', specialty: 'Manipulación de arena' },
        { name: 'Chikamatsu', leader: 'Monzaemon Chikamatsu', specialty: 'Títeres' }
      ]
    },
    {
      name: 'Kirigakure',
      leader: 'Mizukage (Mei Terumi)',
      symbol: 'https://link-a-imagen-simbolo-kirigakure.com',
      clans: [
        { name: 'Hozuki', leader: 'Suigetsu Hozuki', specialty: 'Transformación en agua' },
        { name: 'Yuki', leader: 'Haku', specialty: 'Técnicas de hielo' }
      ]
    },
    {
      name: 'Iwagakure',
      leader: 'Tsuchikage (Kurotsuchi)',
      symbol: 'https://link-a-imagen-simbolo-iwagakure.com',
      clans: [
        { name: 'Kamizuru', leader: 'Shibi Kamizuru', specialty: 'Manipulación de abejas' },
        { name: 'Kitsuchi Clan', leader: 'Kitsuchi', specialty: 'Técnicas de tierra' }
      ]
    },
    {
      name: 'Kumogakure',
      leader: 'Raikage (Darui)',
      symbol: 'https://link-a-imagen-simbolo-kumogakure.com',
      clans: [
        { name: 'Yotsuki', leader: 'A (Raikage)', specialty: 'Raiton' },
        { name: 'Hachibi Jinchuriki', leader: 'Killer Bee', specialty: 'Control del Hachibi' }
      ]
    },
    {
      name: 'Amegakure',
      leader: 'Líder (Nagato)',
      symbol: 'https://link-a-imagen-simbolo-amegakure.com',
      clans: [
        { name: 'Clan desconocido', leader: 'Konan', specialty: 'Origami de papel' }
      ]
    }
  ];

  constructor(private modalController: ModalController) {}

  async openModal(village: Village) {
    const modal = await this.modalController.create({
      component: VillageModalPage,
      componentProps: { village }
    });
    return await modal.present();
  }
}
