import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-add-rapport',
    templateUrl: './add-rapport.component.html',
    styleUrls: ['./add-rapport.component.scss']
})
export class AddRapportComponent implements OnInit {
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
            rapport: value3
        };

        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/rapports', body, this.httpOptions)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('rapport added');
        this.router.navigate(['/rapports']);
        return false;
    }
}
