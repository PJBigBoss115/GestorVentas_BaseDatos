import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrComprasComponent } from './or-compras.component';

describe('OrComprasComponent', () => {
  let component: OrComprasComponent;
  let fixture: ComponentFixture<OrComprasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrComprasComponent]
    });
    fixture = TestBed.createComponent(OrComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
