import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-creator',
  templateUrl: './post-creator.component.html',
  styleUrls: ['./post-creator.component.css']
})
export class PostCreatorComponent implements OnInit {
  action = 'Post';
  postText: string = 'potato';
  postAction = new FormControl('');

  constructor() {

  }

  ngOnInit() {
  }

}
