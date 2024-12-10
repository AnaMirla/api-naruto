import { Component, Input } from '@angular/core';

// Define el tipo ClanData que tiene claves específicas de clanes con sus personajes
type ClanData = {
  Aburame: string[];
  Uchiha: string[];
  Senju: string[];
  Uzumaki: string[];
  Hyuga: string[];
};

// Define el tipo específico para el clan, limitando las claves válidas
type Clan = 'Aburame' | 'Uchiha' | 'Senju' | 'Uzumaki' | 'Hyuga';

@Component({
  selector: 'app-modal-clan',
  templateUrl: './modal-clan.page.html',
  styleUrls: ['./modal-clan.page.scss'],
})
export class ModalClanPage {

  @Input() clan: Clan = 'Aburame';  // Asignar un valor predeterminado del tipo Clan

  clanData: ClanData = {
    Aburame: ['Shino Aburame', 'Kikka Aburame'],
    Uchiha: ['Sasuke Uchiha', 'Itachi Uchiha'],
    Senju: ['Hashirama Senju', 'Tobirama Senju'],
    Uzumaki: ['Naruto Uzumaki', 'Kushina Uzumaki'],
    Hyuga: ['Hinata Hyuga', 'Neji Hyuga']
  };

  constructor() { }

  getCharacters() {
    return this.clanData[this.clan] || [];  // Ahora TypeScript sabe que 'this.clan' es un valor válido
  }
}
