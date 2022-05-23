import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { CommentHomeComponent } from './comment-home/comment-home.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';
import { ListCommentComponent } from './list-comment/list-comment.component';


@NgModule({
  declarations: [
    CommentHomeComponent,
    AddCommentComponent,
    UpdateCommentComponent,
    ListCommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
