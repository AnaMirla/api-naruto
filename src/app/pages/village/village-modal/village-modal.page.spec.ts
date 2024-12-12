import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VillageModalPage } from './village-modal.page';

describe('VillageModalPage', () => {
  let component: VillageModalPage;
  let fixture: ComponentFixture<VillageModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillageModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
