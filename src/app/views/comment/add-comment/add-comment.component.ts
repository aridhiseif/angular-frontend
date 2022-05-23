import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-add-comment',
    templateUrl: './add-comment.component.html',
    styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient, public router: Router) {}

    ngOnInit(): void {}

    submitForm(value: string, value2: string, value3: string) {
        const body = {
            userId: value,
            voyageId: value2,
            comment: value3
        };

        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/comments', body, this.httpOptions)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('commentaire added');
        this.router.navigate(['/comments']);
        return false;
    }
}
