import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KaraModalPage } from './kara-modal.page';

describe('KaraModalPage', () => {
  let component: KaraModalPage;
  let fixture: ComponentFixture<KaraModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
