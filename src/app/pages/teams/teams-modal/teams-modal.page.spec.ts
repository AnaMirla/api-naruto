import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsModalPage } from './teams-modal.page';

describe('TeamsModalPage', () => {
  let component: TeamsModalPage;
  let fixture: ComponentFixture<TeamsModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
