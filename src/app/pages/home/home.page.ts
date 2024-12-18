import { Component, OnInit } from '@angular/core';
import { NarutoService } from '../../services/naruto.service';

export interface Character {
  name: string;
  image: string;
  status: string;
  clan: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  characters: Character[] = [
    { name: 'Naruto Uzumaki', image: 'assets/characters/naruto.jpg', status: 'Alive', clan: 'Uzumaki' },
    { name: 'Sasuke Uchiha', image: 'assets/characters/sasuke.jpg', status: 'Alive', clan: 'Uchiha' },
    { name: 'Sakura Haruno', image: 'assets/characters/sakura.jpg', status: 'Alive', clan: 'Haruno' },
    { name: 'Kakashi Hatake', image: 'assets/characters/kakashi.jpg', status: 'Alive', clan: 'Hatake' },
    { name: 'Minato Namikaze', image: 'assets/characters/minato.png', status: 'Dead', clan: 'Namikaze' },
    { name: 'Itachi Uchiha', image: 'assets/characters/itachi.jpg', status: 'Dead', clan: 'Uchiha' },
    { name: 'Jiraiya', image: 'assets/characters/jiraiya.jpg', status: 'Dead', clan: 'None' },
    { name: 'Tsunade Senju', image: 'assets/characters/tusande.png', status: 'Alive', clan: 'Senju' },
    { name: 'Gaara', image: 'assets/characters/gaara.jpg', status: 'Alive', clan: 'Kazekage Clan' },
    { name: 'Madara Uchiha', image: 'assets/characters/madara.jpg', status: 'Dead', clan: 'Uchiha' },
  ];

  constructor(private narutoService: NarutoService) {}

  ngOnInit() {
    // Intentamos cargar los datos de la API
    this.narutoService.getCharacters().subscribe(
      (data) => {
        this.characters = data; // Si la API responde, reemplazamos los datos
      },
      (error) => {
        console.error('Error al consumir la API', error);
        // Si la API falla, seguimos mostrando los datos predeterminados
      }
    );
  }
}
