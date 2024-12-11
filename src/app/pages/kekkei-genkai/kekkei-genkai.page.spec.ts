import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KekkeiGenkaiPage } from './kekkei-genkai.page';

describe('KekkeiGenkaiPage', () => {
  let component: KekkeiGenkaiPage;
  let fixture: ComponentFixture<KekkeiGenkaiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KekkeiGenkaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
