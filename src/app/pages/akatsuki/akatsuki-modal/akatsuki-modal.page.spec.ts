import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkatsukiModalPage } from './akatsuki-modal.page';

describe('AkatsukiModalPage', () => {
  let component: AkatsukiModalPage;
  let fixture: ComponentFixture<AkatsukiModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AkatsukiModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
