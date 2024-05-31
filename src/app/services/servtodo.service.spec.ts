import { TestBed } from '@angular/core/testing';

import { ServtodoService } from './servtodo.service';

describe('ServtodoService', () => {
  let service: ServtodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServtodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
