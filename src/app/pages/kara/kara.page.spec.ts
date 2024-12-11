import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KaraPage } from './kara.page';

describe('KaraPage', () => {
  let component: KaraPage;
  let fixture: ComponentFixture<KaraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
