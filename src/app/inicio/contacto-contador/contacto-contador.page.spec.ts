import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoContadorPage } from './contacto-contador.page';

describe('ContactoContadorPage', () => {
  let component: ContactoContadorPage;
  let fixture: ComponentFixture<ContactoContadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactoContadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
