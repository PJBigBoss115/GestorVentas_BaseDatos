import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteGeneralComponent } from './reporte-general.component';

describe('ReporteGeneralComponent', () => {
  let component: ReporteGeneralComponent;
  let fixture: ComponentFixture<ReporteGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteGeneralComponent]
    });
    fixture = TestBed.createComponent(ReporteGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
