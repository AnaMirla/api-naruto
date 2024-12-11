import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AkatsukiPage } from './akatsuki.page';

describe('AkatsukiPage', () => {
  let component: AkatsukiPage;
  let fixture: ComponentFixture<AkatsukiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AkatsukiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
