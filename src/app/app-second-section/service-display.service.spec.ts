import { TestBed, inject } from '@angular/core/testing';

import { ServiceDisplayService } from './service-display.service';

describe('ServiceDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDisplayService]
    });
  });

  it('should be created', inject([ServiceDisplayService], (service: ServiceDisplayService) => {
    expect(service).toBeTruthy();
  }));
});
