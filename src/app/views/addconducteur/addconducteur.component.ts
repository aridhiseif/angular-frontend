import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-addconducteur',
    templateUrl: './addconducteur.component.html',
    styleUrls: ['./addconducteur.component.scss']
})
export class AddconducteurComponent implements OnInit {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient, public router: Router) {}
    ngOnInit(): void {}

    submitForm(
        value: string,
        value2: string,
        value3: string,
        value4: string,
        value5: String
    ) {
        const body = {
            firstname: value,
            lastname: value2,
            email: value3,
            tel: value4,
            password: value5
        };
        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/conducteurs', body, this.httpOptions)
            .subscribe(
                (res) => console.log(res),
                (err) => console.log(err)
            );

        alert('conducteur added');
        this.router.navigate(['/conducteur']);
        return false;
    }
}
