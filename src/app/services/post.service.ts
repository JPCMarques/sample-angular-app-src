import { Injectable } from '@angular/core';
import { InternalStorageService } from './internal-storage.service';
import { IPost } from '../structure/post';
import { PersistentDataManagementService } from './persistent-data-management.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends PersistentDataManagementService<IPost> {
  private static readonly POST_BUCKET_ID = 'posts';

  protected getBucketID(): string {
    return PostService.POST_BUCKET_ID;
  }
}

