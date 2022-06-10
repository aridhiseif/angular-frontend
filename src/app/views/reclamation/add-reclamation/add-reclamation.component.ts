import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-add-reclamation',
    templateUrl: './add-reclamation.component.html',
    styleUrls: ['./add-reclamation.component.scss']
})
export class AddReclamationComponent implements OnInit {
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
            userId: value,
            voyageId: value2,
            email: value3,
            sujet: value4,
            reclamation: value5
        };

        console.log(body);
        this.http
            .post('http://127.0.0.1:3000/reclamations', body, this.httpOptions)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('reclamation added');
        this.router.navigate(['/reclamations']);
        return false;
    }
}
