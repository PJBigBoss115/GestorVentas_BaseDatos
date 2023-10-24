import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproveedoresComponent } from './addproveedores.component';

describe('AddproveedoresComponent', () => {
  let component: AddproveedoresComponent;
  let fixture: ComponentFixture<AddproveedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddproveedoresComponent]
    });
    fixture = TestBed.createComponent(AddproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
