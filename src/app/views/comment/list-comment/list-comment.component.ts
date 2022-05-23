import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-list-comment',
    templateUrl: './list-comment.component.html',
    styleUrls: ['./list-comment.component.scss']
})
export class ListCommentComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit() {
        this.restApiService.getCommentaire().subscribe((res: any[]) => {
            this.ItemsArray = res;
        });
    }

    deletecomment(id) {
        this.restApiService.deleteComment(id);
        alert('delete with succes');
        this.router
            .navigate(['/comments'])
            .then(() => window.location.reload());
    }
}
