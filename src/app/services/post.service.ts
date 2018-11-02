import { Injectable } from '@angular/core';
import { InternalStorageService } from './internal-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private internalStorageService: InternalStorageService) { }
}
