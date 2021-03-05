import { TestBed } from '@angular/core/testing';

import { PatientProviderService } from './patient-provider.service';

describe('PatientProviderService', () => {
  let service: PatientProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
