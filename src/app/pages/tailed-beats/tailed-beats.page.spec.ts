import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailedBeatsPage } from './tailed-beats.page';

describe('TailedBeatsPage', () => {
  let component: TailedBeatsPage;
  let fixture: ComponentFixture<TailedBeatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TailedBeatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
