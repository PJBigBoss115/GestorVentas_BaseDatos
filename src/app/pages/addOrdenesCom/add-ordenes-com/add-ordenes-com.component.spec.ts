import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdenesComComponent } from './add-ordenes-com.component';

describe('AddOrdenesComComponent', () => {
  let component: AddOrdenesComComponent;
  let fixture: ComponentFixture<AddOrdenesComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrdenesComComponent]
    });
    fixture = TestBed.createComponent(AddOrdenesComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
