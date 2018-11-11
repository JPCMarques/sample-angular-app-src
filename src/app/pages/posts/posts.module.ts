import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreatorComponent } from './post-creator/post-creator.component';
import { PostDisplayComponent } from './post-display/post-display.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import { PostCardComponent } from './post-display/post-card/post-card.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [PostCreatorComponent, PostDisplayComponent, PostHomeComponent, PostCardComponent],
  exports: [
    PostHomeComponent
  ]
})
export class PostsModule { }
