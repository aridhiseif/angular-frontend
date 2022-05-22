import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-conducteur',
    templateUrl: './conducteur.component.html',
    styleUrls: ['./conducteur.component.scss']
})
export class ConducteurComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit(): void {
        this.restApiService.getConducteurs().subscribe((res: any[]) => {
            this.ItemsArray = res;
        });
    }

    deleteconducteur(id) {
        this.restApiService.deleteConducteur(id);
        alert('consucteur delete');
        this.router
            .navigate(['/conducteur'])
            .then(() => window.location.reload());
    }
}
