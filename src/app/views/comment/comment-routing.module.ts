import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddCommentComponent} from './add-comment/add-comment.component';
import {CommentHomeComponent} from './comment-home/comment-home.component';
import {ListCommentComponent} from './list-comment/list-comment.component';
import {UpdateCommentComponent} from './update-comment/update-comment.component';

const routes: Routes = [
    {
        path: '',
        component: CommentHomeComponent,
        children: [
            {
                path: '',
                component: ListCommentComponent
            },
            {
                path: 'addcomment',
                component: AddCommentComponent
            },
            {
                path: 'updatecomment/:id',
                component: UpdateCommentComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CommentRoutingModule {}
