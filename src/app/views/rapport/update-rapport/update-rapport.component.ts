import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-update-rapport',
    templateUrl: './update-rapport.component.html',
    styleUrls: ['./update-rapport.component.scss']
})
export class UpdateRapportComponent implements OnInit {
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
                'http://127.0.0.1:3000/rapports/' + this.id,
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
            rapport: value3
        };

        console.log(body);
        this.http
            .put(
                'http://127.0.0.1:3000/rapports/' + this.id,
                body,
                this.httpOptions
            )
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('rapport updated');
        this.router.navigate(['/rapports']);
        return false;
    }
}
