import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-add-voyage',
    templateUrl: './add-voyage.component.html',
    styleUrls: ['./add-voyage.component.scss']
})
export class AddVoyageComponent implements OnInit {
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
        value5: string
    ) {
        const body = {
            conducteurId: value,
            start: value2,
            destination: value3,
            date: value4,
            heure: value5
        };

        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/voyages', body, this.httpOptions)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('admin added');
        this.router.navigate(['/voyages']);
        return false;
    }
}
