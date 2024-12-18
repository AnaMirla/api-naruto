import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalClanPage } from './modal-clan.page';
import { IonicModule } from '@ionic/angular';

describe('ModalClanPage', () => {
  let component: ModalClanPage;
  let fixture: ComponentFixture<ModalClanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalClanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalClanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct characters for the Uchiha clan', () => {
    component.clan = 'Uchiha';
    
    // Asumiendo que getCharacters() devuelve una lista de objetos con 'name' e 'image'
    const expectedCharacters = [
      { name: 'Sasuke Uchiha', image: 'sasuke-image.jpg' },
      { name: 'Itachi Uchiha', image: 'itachi-image.jpg' }
    ];

    // Aquí comparas los objetos completos
    expect(component.getCharacters()).toEqual(expectedCharacters);
  });
});
