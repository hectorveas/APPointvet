import { TestBed } from '@angular/core/testing';

import { SpecialContactService } from './special-contact.service';

describe('SpecialContactService', () => {
  let service: SpecialContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
