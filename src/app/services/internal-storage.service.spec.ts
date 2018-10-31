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

  it('should create a new bucket if it does not exist', () => {
    const service: InternalStorageService = TestBed.get(InternalStorageService);
    service.getBucket(bucketID).then((bucket) => {
      expect(bucket).toBeTruthy();
    }).catch((err) => {
      fail(err);
    });
  });

  it('should get an existing bucket', () => {
    const expectedBucket = (localStorage[bucketID] = JSON.stringify({'testKey': 'testValue'}));
    const service: InternalStorageService = TestBed.get(InternalStorageService);
    service.getBucket(bucketID).then((bucket) => {
      expect(JSON.stringify(bucket)).toBe(expectedBucket);
    }).catch((err) => {
      fail(err);
    });
  });

  it('should add to a bucket', () => {
    const service: InternalStorageService = TestBed.get(InternalStorageService);
    const expectedBucketContents = JSON.stringify({'testKey': 'testValue'});
    service.saveData(bucketID, 'testKey', 'testValue').then((bucket) => {
      expect(JSON.stringify(bucket)).toBe(expectedBucketContents);
    }).catch((err) => {
      fail(err);
    });
  });

  it('should remove from a bucket', () => {
    const service: InternalStorageService = TestBed.get(InternalStorageService);
    localStorage[bucketID] = JSON.stringify({'testKey': 'testValue'});
    service.deleteData(bucketID, 'testKey').then((bucket) => {
      expect(JSON.stringify(bucket)).toBe('{}');
    }).catch((err) => {
      fail(err);
    });
  });
});
