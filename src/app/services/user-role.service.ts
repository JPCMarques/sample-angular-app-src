import { Injectable } from '@angular/core';
import { PersistentDataManagementService } from './persistent-data-management.service';
import { IUserRole } from '../structure/userRole';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService extends PersistentDataManagementService<IUserRole> {
  private static readonly USER_ROLE_BUCKET_ID = 'uroles';

  protected getBucketID(): string {
    return UserRoleService.USER_ROLE_BUCKET_ID;
  }
}
