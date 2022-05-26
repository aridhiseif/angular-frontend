import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-add-rating',
    templateUrl: './add-rating.component.html',
    styleUrls: ['./add-rating.component.scss']
})
export class AddRatingComponent implements OnInit {
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
            conducteurId: value2,
            rating: parseInt(value3)
        };

        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/ratings', body, this.httpOptions)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('rating added');
        this.router.navigate(['/ratings']);
        return false;
    }
}
