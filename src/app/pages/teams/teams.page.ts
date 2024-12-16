import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TeamsModalPage } from '../teams/teams-modal/teams-modal.page';

interface Team {
  name: string;
  image: string;
  leader: string;
  members: { name: string; image: string }[];
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage {
  teams: Team[] = [
    { 
      name: 'Team 7', 
      image: 'assets/teams/equipos/equipo 7/kakashi.jpg', 
      leader: 'Kakashi Hatake', 
      members: [
        { name: 'Naruto Uzumaki', image: 'assets/teams/naruto.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/sakura.jpg' }
      ]
    },
    {
      name: 'Team 10',
      image: 'assets/teams/equipos/equipo 10/asuma.jpg',
      leader: 'Asuma Sarutobi',
      members: [
        { name: 'Shikamaru Nara', image: 'assets/teams/equipos/equipo 10/shikamaru.jpg' },
        { name: 'Choji Akimichi', image: 'assets/teams/equipos/equipo 10/choji.jpg' },
        { name: 'Ino Yamanaka', image: 'assets/teams/equipos/equipo 10/ino.jpg' }
      ]
    },
    {
      name: 'Team 8',
      image: 'assets/teams/equipos/equipo 8/kiba.jpg',
      leader: 'Kiba Inuzuka',
      members: [
        { name: 'Kiba Inuzuka', image: 'assets/teams/equipos/equipo 8/kiba.jpg' },
        { name: 'Hinata Hyuga', image: 'assets/teams/equipos/equipo 8/hinata.jfif' },
        { name: 'Shino Aburame', image: 'assets/teams/equipos/equipo 8/shino.jpg' }
      ]
    },
    {
      name: 'Team 5',
      image: 'assets/teams/equipos/equipo 5/tsunade.jpeg',
      leader: 'Tsunade Senju',
      members: [
        { name: 'Karin Uzumaki', image: 'assets/teams/equipos/equipo 5/karin.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/equipos/equipo 5/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/equipos/equipo 5/sakura.jpg' }
      ]
    },
    {
      name: 'Team 11',
      image: 'assets/teams/equipos/equipo 11/killer bee.jpg',
      leader: 'Killer Bee',
      members: [
        { name: 'Killer Bee', image: 'assets/teams/equipos/equipo 11/killer bee.jpg' },
        { name: 'A', image: 'assets/teams/equipos/equipo 11/A.jpg' },
        { name: 'Gai', image: 'assets/teams/equipos/equipo 11/Maito Gai.png' }
      ]
    },
    {
      name: 'Team 9',
      image: 'assets/teams/equipos/equipo 9/sai.jpg',
      leader: 'Sai',
      members: [
        { name: 'Naruto Uzumaki', image: 'assets/teams/equipos/equipo 9/naruto.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/equipos/equipo 9/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/equipos/equipo 9/sakura.jpg' }
      ]
    },
    {
      name: 'Team 6',
      image: 'assets/teams/equipos/equipo 6/equipo6.png',
      leader: 'Might Guy',
      members: [
        { name: 'Rock Lee', image: 'assets/teams/equipos/equipo 6/rock lee.jpg' },
        { name: 'Neji Hyuga', image: 'assets/teams/equipos/equipo 6/neji.jpg' },
        { name: 'Tenten', image: 'assets/teams/equipos/equipo 6/tenten.jpeg' }
      ]
    },
    {
      name: 'Team 12',
      image: 'assets/teams/equipos/equipo 12/hanko.jpg',
      leader: 'Anko Mitarashi',
      members: [
        { name: 'Karin Uzumaki', image: 'assets/teams/equipos/equipo 12/karin.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/equipos/equipo 12/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/equipos/equipo 12/sakura.jpg' }
      ]
    },
    {
      name: 'Team 13',
      image: 'assets/teams/equipos/equipo 13/kabuto.jpg',
      leader: 'Kabuto Yakushi',
      members: [
        { name: 'Kabuto Yakushi', image: 'assets/teams/equipos/equipo 13/kabuto.jpg' },
        { name: 'Orochimaru', image: 'assets/teams/equipos/equipo 13/oroshimaru.jfif' },
        { name: 'Sasori', image: 'assets/teams/equipos/equipo 13/sasory.jpg' }
      ]
    },
    {
      name: 'Team 3',
      image: 'assets/teams/equipos/equipo 3/sarutobi.jpg',
      leader: 'Hiruzen Sarutobi',
      members: [
        { name: 'Tsunade Senju', image: 'assets/teams/equipos/equipo 3/tsunade.jpeg' },
        { name: 'Jiraiya', image: 'assets/teams/equipos/equipo 3/jiraiya.jpg' },
        { name: 'Orochimaru', image: 'assets/teams/equipos/equipo 3/oroshimaru.jfif' }
      ]
    }
  ];

  constructor(private modalController: ModalController) {}

  async openModal(team: Team) {
    const modal = await this.modalController.create({
      component: TeamsModalPage,
      componentProps: { team }
    });
    return await modal.present();
  }
}
