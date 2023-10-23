import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticulosComponent } from './add-articulos.component';

describe('AddArticulosComponent', () => {
  let component: AddArticulosComponent;
  let fixture: ComponentFixture<AddArticulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddArticulosComponent]
    });
    fixture = TestBed.createComponent(AddArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
