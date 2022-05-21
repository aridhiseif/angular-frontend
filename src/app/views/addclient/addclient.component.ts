import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-addclient',
    templateUrl: './addclient.component.html',
    styleUrls: ['./addclient.component.scss']
})
export class AddclientComponent implements OnInit {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient, public router: Router) {}

    ngOnInit() {}

    submitForm(
        value: string,
        value2: string,
        value3: string,

        value5: string
    ) {
        const body = {
            firstname: value,
            lastname: value2,
            email: value3,

            password: value5
        };

        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/clients', body, this.httpOptions)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('client added');
        this.router.navigate(['/client']);
        return false;
    }
}
