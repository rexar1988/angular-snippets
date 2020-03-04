import { TestBed, async, inject } from '@angular/core/testing';

import { ExitGuard } from './exit.guard';

describe('ExitGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExitGuard]
    });
  });

  it('should ...', inject([ExitGuard], (guard: ExitGuard) => {
    expect(guard).toBeTruthy();
  }));
});
