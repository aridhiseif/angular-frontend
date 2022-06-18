import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-update-voyage',
    templateUrl: './update-voyage.component.html',
    styleUrls: ['./update-voyage.component.scss']
})
export class UpdateVoyageComponent implements OnInit {
    id = 1;
    dataone;

    //http headers
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

    // get current data on initialisation
    ngOnInit(): void {
        this.http
            .get<any[]>(
                'http://127.0.0.1:3000/voyages/' + this.id,
                this.httpOptions
            )
            .subscribe((res: any) => {
                this.dataone = res;
                console.log(this.dataone);
            });
    }

    submitForm(
        value: string,
        value2: string,
        value3: string,
        value4: string,
        value5: string,
        value6: string,
        value7: string,
        value8: string,
        value9: string,
        value10: string,
        value11: string,
        value12: string
    ) {
        const body = {
            conducteurId: value,
            mat: value2,
            depart: value3,
            fin: value4,
            nom: value5,
            bags: value6,
            marque: value7,
            nbdeplace: value8,
            datec: value9,
            heure: value10,
            features: value11,
            prixvoyage: value12
        };

        console.log(body);
        this.http
            .put(
                'http://127.0.0.1:3000/voyages/' + this.id,
                body,
                this.httpOptions
            )
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
        alert('voyage updated');
        this.router.navigate(['/voyages']);
        return false;
    }
}
