import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-update-rating',
    templateUrl: './update-rating.component.html',
    styleUrls: ['./update-rating.component.scss']
})
export class UpdateRatingComponent implements OnInit {
    id = 1;
    dataone;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(
        private http: HttpClient,
        public router: Router,
        private actRoute: ActivatedRoute
    ) {
        this.id = this.actRoute.snapshot.params.id;
    }
    ngOnInit(): void {
        this.http
            .get<any[]>(
                'http://127.0.0.1:3000/ratings/' + this.id,
                this.httpOptions
            )
            .subscribe((res: any) => {
                this.dataone = res;
                console.log(this.dataone);
            });
    }

    submitForm(value: string, value2: string, value3: string) {
        const body = {
            userId: value,
            conducteurId: value2,
            rating: parseInt(value3)
        };

        console.log(body);
        this.http
            .put(
                'http://127.0.0.1:3000/ratings/' + this.id,
                body,
                this.httpOptions
            )
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('rating updated');
        this.router.navigate(['/ratings']);
        return false;
    }
}
