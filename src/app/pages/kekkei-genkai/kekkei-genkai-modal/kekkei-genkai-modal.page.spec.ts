import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KekkeiGenkaiModalPage } from './kekkei-genkai-modal.page';

describe('KekkeiGenkaiModalPage', () => {
  let component: KekkeiGenkaiModalPage;
  let fixture: ComponentFixture<KekkeiGenkaiModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KekkeiGenkaiModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
