import { Injectable } from '@angular/core';
import { IStorageBucket } from '../structure/storageBucket';

@Injectable({
  providedIn: 'root'
})
export class InternalStorageService {

  constructor() { }

  public async getBucket(bucketID: string): Promise<IStorageBucket> {
    if (!localStorage[bucketID] || localStorage[bucketID] === 'undefined') {
      localStorage[bucketID] = JSON.stringify({});
    }
    return Promise.resolve(JSON.parse(localStorage[bucketID]));
  }

  public async saveData(bucketID: string, dataKey: string, value: any): Promise<IStorageBucket> {
    return this.getBucket(bucketID).then((bucket) => {
      bucket[dataKey] = value;
      localStorage[bucketID] = JSON.stringify(bucket);
      return bucket;
    });
  }

  public async deleteData(bucketID: string, dataKey: string): Promise<IStorageBucket> {
    return this.saveData(bucketID, dataKey, undefined);
  }
}
