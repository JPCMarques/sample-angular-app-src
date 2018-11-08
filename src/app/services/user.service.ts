import { Injectable, Output, EventEmitter } from '@angular/core';
import { InternalStorageService } from './internal-storage.service';
import { IUser } from '../structure/user';
import * as uuid from 'uuid';
import { PersistentDataManagementService } from './persistent-data-management.service';
import { IUserRole } from '../structure/userRole';

@Injectable({
  providedIn: 'root'
})
export class UserService extends PersistentDataManagementService<IUser> {
  private static readonly USER_BUCKET_ID = 'users';

  protected getBucketID(): string {
    return UserService.USER_BUCKET_ID;
  }

  public async addUser(username: string, phoneNumber: string, role: IUserRole, name: string): Promise<void> {
    const user: IUser = {
      id: uuid.v4(),
      username: username,
      phoneNumber: phoneNumber,
      role: role,
      name: name
    };

    return this.addData(user);
  }
}
