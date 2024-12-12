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
      image: 'assets/teams/equipo7.jpg', 
      leader: 'Kakashi Hatake', 
      members: [
        { name: 'Naruto Uzumaki', image: 'assets/teams/naruto.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/sakura.jpg' }
      ]
    },
    {
      name: 'Team 10',
      image: 'assets/teams/equipo10.jpg',
      leader: 'Asuma Sarutobi',
      members: [
        { name: 'Shikamaru Nara', image: 'assets/teams/shikamaru.jpg' },
        { name: 'Choji Akimichi', image: 'assets/teams/choji.jpg' },
        { name: 'Ino Yamanaka', image: 'assets/teams/ino.jpg' }
      ]
    },
    {
      name: 'Team 8',
      image: 'assets/teams/equipo8.jpg',
      leader: 'Kiba Inuzuka',
      members: [
        { name: 'Kiba Inuzuka', image: 'assets/teams/kiba.jpg' },
        { name: 'Hinata Hyuga', image: 'assets/teams/hinata.jpg' },
        { name: 'Shino Aburame', image: 'assets/teams/shino.jpg' }
      ]
    },
    {
      name: 'Team 5',
      image: 'assets/teams/equipo5.jpg',
      leader: 'Tsunade Senju',
      members: [
        { name: 'Karin Uzumaki', image: 'assets/teams/karin.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/sakura.jpg' }
      ]
    },
    {
      name: 'Team 11',
      image: 'assets/teams/equipo11.jpg',
      leader: 'Killer Bee',
      members: [
        { name: 'Killer Bee', image: 'assets/teams/killerbee.jpg' },
        { name: 'A', image: 'assets/teams/a.jpg' },
        { name: 'Gai', image: 'assets/teams/gai.jpg' }
      ]
    },
    {
      name: 'Team 9',
      image: 'assets/teams/equipo9.jpg',
      leader: 'Sai',
      members: [
        { name: 'Naruto Uzumaki', image: 'assets/teams/naruto.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/sakura.jpg' }
      ]
    },
    {
      name: 'Team 6',
      image: 'assets/teams/equipo6.jpg',
      leader: 'Might Guy',
      members: [
        { name: 'Rock Lee', image: 'assets/teams/rocklee.jpg' },
        { name: 'Neji Hyuga', image: 'assets/teams/neji.jpg' },
        { name: 'Tenten', image: 'assets/teams/tenten.jpg' }
      ]
    },
    {
      name: 'Team 12',
      image: 'assets/teams/equipo12.jpg',
      leader: 'Anko Mitarashi',
      members: [
        { name: 'Karin Uzumaki', image: 'assets/teams/karin.jpg' },
        { name: 'Sasuke Uchiha', image: 'assets/teams/sasuke.jpg' },
        { name: 'Sakura Haruno', image: 'assets/teams/sakura.jpg' }
      ]
    },
    {
      name: 'Team 13',
      image: 'assets/teams/equipo13.jpg',
      leader: 'Kabuto Yakushi',
      members: [
        { name: 'Kabuto Yakushi', image: 'assets/teams/kabuto.jpg' },
        { name: 'Orochimaru', image: 'assets/teams/orochimaru.jpg' },
        { name: 'Sasori', image: 'assets/teams/sasori.jpg' }
      ]
    },
    {
      name: 'Team 3',
      image: 'assets/teams/equipo3.jpg',
      leader: 'Hiruzen Sarutobi',
      members: [
        { name: 'Tsunade Senju', image: 'assets/teams/tsunade.jpg' },
        { name: 'Jiraiya', image: 'assets/teams/jiraiya.jpg' },
        { name: 'Orochimaru', image: 'assets/teams/orochimaru.jpg' }
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
