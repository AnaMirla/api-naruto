import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss'],
})
export class CharacterModalComponent {
  @Input() character: any; // Recibimos el personaje como entrada

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss(); // Cierra el modal
  }
}
