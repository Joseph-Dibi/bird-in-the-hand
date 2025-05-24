import { TestBed } from '@angular/core/testing';

import { BirdManagementService } from './bird-management.service';

describe('BirdManagementService', () => {
  let service: BirdManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirdManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
