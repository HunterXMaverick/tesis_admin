import { TestBed } from '@angular/core/testing';

import { Files.ServiceService } from './files.service.service';

describe('Files.ServiceService', () => {
  let service: Files.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Files.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
