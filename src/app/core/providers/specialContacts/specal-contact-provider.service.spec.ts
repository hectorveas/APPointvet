import { TestBed } from '@angular/core/testing';

import { SpecalContactProviderService } from './specal-contact-provider.service';

describe('SpecalContactProviderService', () => {
  let service: SpecalContactProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecalContactProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
