import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CharacterModalComponent } from './character-modal/character-modal.component';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  characterId: number | null = null;
  character: any;

  characters = [
    { id: 1, name: 'Amado', image: 'assets/characters/amado.jpg', clan: 'Unknown', status: 'Alive' },
    { id: 2, name: 'Boro', image: 'assets/characters/boro.jpg', clan: 'Kara', status: 'Deceased' },
    { id: 3, name: 'Deidara', image: 'assets/characters/deidara.jpg', clan: 'Unknown', status: 'Deceased' },
    { id: 4, name: 'Delta', image: 'assets/characters/delta.jpg', clan: 'Kara', status: 'Active' },
    { id: 5, name: 'Gaara', image: 'assets/characters/gaara.jpg', clan: 'Kazekage', status: 'Alive' },
    { id: 6, name: 'Hashirama Senju', image: 'assets/characters/hashirama.jpg', clan: 'Senju', status: 'Deceased' },
    { id: 7, name: 'Hinata Hyuga', image: 'assets/characters/hinata.jpg', clan: 'Hyuga', status: 'Alive' },
    { id: 8, name: 'Itachi Uchiha', image: 'assets/characters/itachi.jpg', clan: 'Uchiha', status: 'Deceased' },
    { id: 9, name: 'Jigen', image: 'assets/characters/jigen.jpg', clan: 'Kara', status: 'Deceased' },
    { id: 10, name: 'Jiraiya', image: 'assets/characters/jiraiya.jpg', clan: 'Unknown', status: 'Deceased' },
    { id: 11, name: 'Kakashi Hatake', image: 'assets/characters/kakashi.jpg', clan: 'Hatake', status: 'Alive' },
    { id: 12, name: 'Kashin Koji', image: 'assets/characters/kashin koji.jpg', clan: 'Kara', status: 'Alive' },
    { id: 13, name: 'Kisame Hoshigaki', image: 'assets/characters/kisamen.jpg', clan: 'Hoshigaki', status: 'Deceased' },
    { id: 14, name: 'Madara Uchiha', image: 'assets/characters/madara.jpg', clan: 'Uchiha', status: 'Deceased' },
    { id: 15, name: 'Minato Namikaze', image: 'assets/characters/minato.png', clan: 'Namikaze', status: 'Deceased' },
    { id: 16, name: 'Muta', image: 'assets/characters/muta.png', clan: 'Unknown', status: 'Deceased' },
    { id: 17, name: 'Naruto Uzumaki', image: 'assets/characters/naruto.jpg', clan: 'Uzumaki', status: 'Alive' },
    { id: 18, name: 'Neji Hyuga', image: 'assets/characters/neji.jpg', clan: 'Hyuga', status: 'Deceased' },
    { id: 19, name: 'Pain (Nagato)', image: 'assets/characters/pain.jpg', clan: 'Uzumaki', status: 'Deceased' },
    { id: 20, name: 'Sakura Haruno', image: 'assets/characters/sakura.jpg', clan: 'Haruno', status: 'Alive' },
    { id: 21, name: 'Sasori', image: 'assets/characters/sasori.jpg', clan: 'Unknown', status: 'Deceased' },
    { id: 22, name: 'Sasuke Uchiha', image: 'assets/characters/sasuke.jpg', clan: 'Uchiha', status: 'Alive' },
    { id: 23, name: 'Shino Aburame', image: 'assets/characters/shino.jpg', clan: 'Aburame', status: 'Alive' },
    { id: 24, name: 'Tobirama Senju', image: 'assets/characters/tobirama.jpg', clan: 'Senju', status: 'Deceased' },
    { id: 25, name: 'Tsunade', image: 'assets/characters/tusande.png', clan: 'Senju', status: 'Alive' },
    { id: 26, name: 'Karin', image: './assets/characters/karin.jpg', clan: 'Uzumaki', status: 'Alive' },
    { id: 27, name: 'Rock Lee', image: './assets/characters/rock lee.jpg', clan: 'None', status: 'Alive' },
    { id: 28, name: 'Ino Yamanaka', image: './assets/characters/ino.jpg', clan: 'Yamanaka', status: 'Alive' }
  ];


  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.characterId = params['id'];

      if (this.characterId !== null) {
        this.character = this.characters.find(c => c.id === this.characterId);
      }
    });
  }

  async openModal(character: any) {
    const modal = await this.modalController.create({
      component: CharacterModalComponent,
      componentProps: { character }
    });
    await modal.present();
  }
}
