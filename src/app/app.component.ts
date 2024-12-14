import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Characters', url: '/character', icon: 'person' },
    { title: 'Clans', url: '/clanes', icon: 'people' },
    { title: 'Kekkei Genkai', url: '/kekkei-genkai', icon: 'leaf' },
    { title: 'Tailed Beats', url: '/tailed-beats', icon: 'paw' },
    { title: 'Teams', url: '/teams', icon: 'albums' },
    { title: 'Village', url: '/village', icon: 'home' },
    { title: 'Kara', url: '/kara', icon: 'people' },
    { title: 'Akatsuki', url: '/akatsuki', icon: 'person' },
  ];
}
