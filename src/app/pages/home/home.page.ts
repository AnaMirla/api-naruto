import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  characters = [
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

  constructor() {}

  ngOnInit() {}
}
