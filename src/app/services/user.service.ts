import { Injectable } from '@angular/core';
import { InternalStorageService } from './internal-storage.service';
import { IUser } from '../structure/user';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly USER_BUCKET_ID: string = 'users';

  private userStorage: IUserStorage = {};

  constructor(private internalStorageService: InternalStorageService) {
    internalStorageService.getBucket(UserService.USER_BUCKET_ID).then((storageBucket) => {
      Object.keys(storageBucket).forEach((userID) => {
        this.userStorage[userID] = storageBucket[userID];
      });
    });
  }

  public async addUser(name: string, phoneNumber: string, role: string, username: string): Promise<IUser> {
    const user: IUser = {
      id: uuid.v4(),
      name: name,
      phoneNumber: phoneNumber,
      role: role,
      username: username,
    };

    this.userStorage[user.id] = user;

    return this.internalStorageService.saveData(UserService.USER_BUCKET_ID, user.id, JSON.stringify(user)).then(() => {
      return user;
    });
  }

  public async removeUser(id: string): Promise<void> {
    this.userStorage[id] = undefined;

    await this.internalStorageService.deleteData(UserService.USER_BUCKET_ID, id);
  }

  public async users(): Promise<IUserStorage> {
    return this.userStorage;
  }

  public async getUser(id: string): Promise<IUser> {
    return this.users().then((userStorage) => {
      return userStorage[id];
    });
  }
}

export interface IUserStorage {
  [index: string]: IUser;
}
