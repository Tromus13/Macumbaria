import { TestBed } from '@angular/core/testing';

import { ServiceFilhoService } from './service-filho.service';

describe('ServiceFilhoService', () => {
  let service: ServiceFilhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFilhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
