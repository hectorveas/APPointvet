import { TestBed } from '@angular/core/testing';

import { PacientGuard } from './pacient.guard';

describe('PacientGuard', () => {
  let guard: PacientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PacientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
