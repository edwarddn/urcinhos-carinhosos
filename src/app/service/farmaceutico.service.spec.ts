import { TestBed } from '@angular/core/testing';

import { FarmaceuticoService } from './farmaceutico.service';

describe('FarmaceuticoService', () => {
  let service: FarmaceuticoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmaceuticoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
