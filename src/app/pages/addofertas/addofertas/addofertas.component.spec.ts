import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddofertasComponent } from './addofertas.component';

describe('AddofertasComponent', () => {
  let component: AddofertasComponent;
  let fixture: ComponentFixture<AddofertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddofertasComponent]
    });
    fixture = TestBed.createComponent(AddofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
