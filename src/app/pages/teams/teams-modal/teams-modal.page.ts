import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface Team {
  name: string;
  leader: string;
  image: string;  // Asegúrate de que la propiedad "image" del líder esté definida
  members: { name: string; image: string }[];
}

@Component({
  selector: 'app-teams-modal',
  templateUrl: './teams-modal.page.html',
  styleUrls: ['./teams-modal.page.scss'],
})
export class TeamsModalPage {
  @Input() team!: Team;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
