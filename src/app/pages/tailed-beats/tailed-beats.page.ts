import { Component } from '@angular/core';

interface Bestia {
  name: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-tailed-beats',
  templateUrl: './tailed-beats.page.html',
  styleUrls: ['./tailed-beats.page.scss'],
})
export class TailedBeatsPage {
  bestiasList: Bestia[] = [
    { 
      name: 'Choemi', 
      image: 'assets/tealed beats/chomei.jpg', 
      description: 'Choemi, también conocida como la Bestia de Seis Colas, es una criatura poderosa con la habilidad de controlar el viento. Su naturaleza pacífica la hace una de las bestias más benevolentes, aunque su fuerza es increíblemente destructiva en combate.' 
    },
    { 
      name: 'Gyuki', 
      image: 'assets/tealed beats/Gyuki.jpg', 
      description: 'Gyuki es la Bestia de Ocho Colas, conocida por su gran fuerza y su capacidad para utilizar poderosos ataques de energía. Es un ser extremadamente sabio y tiene una relación compleja con su jinchūriki, el octavo Hokage.' 
    },
    { 
      name: 'Isobu', 
      image: 'assets/tealed beats/Isobu.jpg', 
      description: 'Isobu, la Bestia de Tres Colas, es una criatura acuática con una gran resistencia. A pesar de su apariencia tranquila, su poder puede desatar enormes tormentas marinas que arrasan con todo a su paso.' 
    },
    { 
      name: 'Juubi', 
      image: 'assets/tealed beats/juubi.jpg', 
      description: 'El Juubi, también conocido como la Bestia de Diez Colas, es la criatura más poderosa de todas. Con su capacidad para desatar destrucción masiva y su conexión con el chakra de todos los seres vivos, su poder es prácticamente ilimitado.' 
    },
    { 
      name: 'Kokuo', 
      image: 'assets/tealed beats/Kokuo.jpg', 
      description: 'Kokuo, la Bestia de Cinco Colas, se caracteriza por su gran velocidad y la habilidad de manipular el agua. Su jinchūriki, el Quinto Hokage, posee una conexión especial con ella debido a su poder y lealtad mutuos.' 
    },
    { 
      name: 'Kurama', 
      image: 'assets/tealed beats/kurama.jpg', 
      description: 'Kurama, la Bestia de Nueve Colas, es una de las criaturas más temidas en el mundo. Con su inmenso poder y su capacidad para generar ondas de energía destructivas, Kurama tiene un vínculo profundo con su jinchūriki, Naruto Uzumaki.' 
    },
    { 
      name: 'Matatabi', 
      image: 'assets/tealed beats/matatabi.png', 
      description: 'Matatabi, la Bestia de Dos Colas, es conocida por su fuego azul que puede calentar incluso el aire a su alrededor. Es una bestia feroz, pero también tiene un sentido de lealtad muy fuerte hacia aquellos que la entienden.' 
    },
    { 
      name: 'Saien', 
      image: 'assets/tealed beats/saiken.jpg', 
      description: 'Saien, la Bestia de Ocho Colas, es una criatura tranquila y compasiva, aunque su poder es innegable. Su habilidad para manipular el agua y el vapor la convierte en una adversaria formidable en combate.' 
    },
    { 
      name: 'Shukaku', 
      image: 'assets/tealed beats/Shukaku.png', 
      description: 'Shukaku, la Bestia de Una Cola, es conocida por su personalidad solitaria y su capacidad para manipular la arena. A pesar de su naturaleza salvaje, tiene una conexión profunda con su jinchūriki, Gaara.' 
    },
    { 
      name: 'Son Goku', 
      image: 'assets/tealed beats/son_goku.jpg', 
      description: 'Son Goku, la Bestia de Cuatro Colas, es una criatura espiritual que ha estado vinculada a la humanidad desde tiempos remotos. Su poder se basa en el fuego y la lava, y es una de las bestias más sabias y poderosas en la historia.' 
    }
  ];

  openModal(bestia: Bestia) {
    console.log('Abriendo modal para', bestia);
  }
}
