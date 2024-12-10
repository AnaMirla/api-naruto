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
    { id: 1, name: 'Naruto Uzumaki', image: 'assets/characters/naruto.jpg', clan: 'Uzumaki', status: 'Alive' },
    { id: 2, name: 'Sasuke Uchiha', image: 'assets/characters/naruto.jpg', clan: 'Uchiha', status: 'Alive' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController
  ) {}

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
