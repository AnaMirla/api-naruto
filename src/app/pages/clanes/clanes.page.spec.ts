import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClanesPage } from './clanes.page';
import { IonicModule } from '@ionic/angular';

describe('ClanesPage', () => {
  let component: ClanesPage;
  let fixture: ComponentFixture<ClanesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClanesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of clans', () => {
    expect(component.clans.length).toBeGreaterThan(0);
  });
});
