import { TestBed } from '@angular/core/testing';

import { AddproveedoresService } from './addproveedores.service';

describe('AddproveedoresService', () => {
  let service: AddproveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddproveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
