import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { IPost } from 'src/app/structure/post';

@Component({
  selector: 'app-post-display',
  templateUrl: './post-display.component.html',
  styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent implements OnInit {
  posts: IPost[] = [
    {
      id: 'potato',
      content: 'test',
      created: new Date(),
      lastModified: new Date()
    }
  ];

  constructor(private postService: PostService) {
    postService.dataStorageUpdated.subscribe(() => {
      this.loadPostsFromStorage();
    })
    this.loadPostsFromStorage();
  }

  ngOnInit() {
  }

  private loadPostsFromStorage(): void {
    const tPosts: IPost[] = [];
    Object.keys(this.postService.dataStorage).forEach((key) => {
      tPosts.push(this.postService.dataStorage[key]);
    });
    this.posts = tPosts;
  }
}
