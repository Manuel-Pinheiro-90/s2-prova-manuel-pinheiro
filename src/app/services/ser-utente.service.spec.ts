import { TestBed } from '@angular/core/testing';

import { SerUtenteService } from './serutente.service';

describe('SerUtenteService', () => {
  let service: SerUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
