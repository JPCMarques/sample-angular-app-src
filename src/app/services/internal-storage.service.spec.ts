import { TestBed } from '@angular/core/testing';

import { InternalStorageService } from './internal-storage.service';
import { IStorageBucket } from '../structure/storageBucket';
const bucketID = 'testBucket';

describe('InternalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  afterEach(() => {
    localStorage[bucketID] = undefined;
  });

  it('should be created', () => {
    const service: InternalStorageService = TestBed.get(InternalStorageService);
    expect(service).toBeTruthy();
  });
});
