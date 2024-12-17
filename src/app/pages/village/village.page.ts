import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VillageModalPage } from '../village/village-modal/village-modal.page';

interface Village {
  name: string;
  leader: string;
  symbol: string;
  characters: { name: string; role: string; image: string }[];
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
      symbol: './assets/aldeas/konohagakure/symbol_konohagakure.jpg',
      characters: [
        { name: 'Hiashi Hyuga', role: 'Líder del Clan Hyuga', image: './assets/aldeas/konohagakure/lider hyuga hiashi hyuga.jpg' },
      ],
    },
    {
      name: 'Sunagakure',
      leader: 'Kazekage (Gaara)',
      symbol: './assets/aldeas/sunagakure/sunagakure.jpg',
      characters: [
        { name: 'Gaara', role: 'Kazekage', image: './assets/aldeas/sunagakure/gaara.jpg' },
        { name: 'Rasa', role: 'Cuarto Kazekage', image: './assets/aldeas/sunagakure/rasa.jpg' },
        { name: 'Monzaemon', role: 'Inventor de Títeres', image: './assets/aldeas/sunagakure/monzaemon.png' },
      ],
    },
    {
      name: 'Kirigakure',
      leader: 'Mizukage (Mei Terumi)',
      symbol: './assets/aldeas/kirigakure/kirigakure.jpg',
      characters: [
        { name: 'Haku', role: 'Ninja de hielo', image: './assets/aldeas/kirigakure/haku.jpg' },
        { name: 'Mei Terumi', role: 'Mizukage', image: './assets/aldeas/kirigakure/mei terumi.jpg' },
        { name: 'Suigetsu Hozuki', role: 'Espadachín', image: './assets/aldeas/kirigakure/suigetsu hozuki.jpg' },
      ],
    },
    {
      name: 'Iwagakure',
      leader: 'Tsuchikage (Kurotsuchi)',
      symbol: './assets/aldeas/iwagakure/iwagakure.jpeg',
      characters: [
        { name: 'Kitsuchi', role: 'Comandante ninja', image: './assets/aldeas/iwagakure/kitsuchi.jpg' },
        { name: 'Kurotsuchi', role: 'Tsuchikage', image: './assets/aldeas/iwagakure/kurotsuchi.jpg' },
        { name: 'Shibi Kamizuru', role: 'Ninja de abejas', image: './assets/aldeas/iwagakure/shibi kamizuru.jfif' },
      ],
    },
    {
      name: 'Kumogakure',
      leader: 'Raikage (Darui)',
      symbol: './assets/aldeas/kumogakure/kumogakure.jpeg',
      characters: [
        { name: 'A (Raikage)', role: 'Anterior Raikage', image: './assets/aldeas/kumogakure/a raikage.jfif' },
        { name: 'Darui', role: 'Actual Raikage', image: './assets/aldeas/kumogakure/dsarui.png' },
      ],
    },
    {
      name: 'Amegakure',
      leader: 'Líder (Nagato)',
      symbol: './assets/aldeas/amegakure/amegakure.jpeg',
      characters: [
        { name: 'Konan', role: 'Segunda al mando', image: './assets/aldeas/amegakure/konan.png' },
        { name: 'Nagato (Pain)', role: 'Líder de Akatsuki', image: './assets/aldeas/amegakure/nagato pain.jpg' },
      ],
    },
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
