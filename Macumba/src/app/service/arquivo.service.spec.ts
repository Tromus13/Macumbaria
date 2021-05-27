import { TestBed } from '@angular/core/testing';

import { ArquivoService } from './arquivo.service';

describe('ArquivoService', () => {
  let service: ArquivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArquivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
