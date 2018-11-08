import { TestBed } from '@angular/core/testing';

import { PersistentDataManagementService } from './persistent-data-management.service';

describe('PersistentDataManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersistentDataManagementService = TestBed.get(PersistentDataManagementService);
    expect(service).toBeTruthy();
  });
});
