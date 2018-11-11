import { Injectable, EventEmitter, Output } from '@angular/core';
import { InternalStorageService } from './internal-storage.service';
import { IPersistentData } from '../structure/persistentData';

@Injectable({
  providedIn: 'root'
})
export abstract class PersistentDataManagementService<T extends IPersistentData> {
  @Output() dataStorageUpdated = new EventEmitter<{[index: string]: T}>();

  dataStorage: {[index: string]: T} = {};

  constructor(private internalStorageService: InternalStorageService) {
    internalStorageService.getBucket(this.getBucketID()).then((storageBucket) => {
      Object.keys(storageBucket).forEach((key) => {
        this.dataStorage[key] = storageBucket[key];
      });
    });
  }

  protected abstract getBucketID(): string;

  public async addData(data: T): Promise<any> {
    return this.internalStorageService.saveData(
      this.getBucketID(),
      data.id,
      JSON.stringify(data)
    ).then(() => {
      this.dataStorage[data.id] = data;
      this.dataStorageUpdated.emit(this.dataStorage);
    });
  }

  public async removeData(id: string): Promise<T> {
    return this.internalStorageService.deleteData(
      this.getBucketID(),
      id
    ).then(() => {
      const data = this.dataStorage[id];
      this.dataStorage[id] = undefined;
      this.dataStorageUpdated.emit(this.dataStorage);
      return data;
    });
  }
}
