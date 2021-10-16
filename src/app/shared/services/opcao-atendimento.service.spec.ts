import { TestBed } from '@angular/core/testing';

import { OpcaoAtendimentoService } from './opcao-atendimento.service';

describe('OpcaoAtendimentoService', () => {
  let service: OpcaoAtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcaoAtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
