import { TestBed } from '@angular/core/testing';

import { TaxaEntregaService } from './taxa-entrega.service';

describe('TaxaEntregaService', () => {
  let service: TaxaEntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxaEntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
