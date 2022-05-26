import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-list-rapport',
    templateUrl: './list-rapport.component.html',
    styleUrls: ['./list-rapport.component.scss']
})
export class ListRapportComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit() {
        this.restApiService.getRapports().subscribe((res: any[]) => {
            this.ItemsArray = res;
            console.log(res);
        });
    }

    deleteRapport(id) {
        this.restApiService.deleteRapport(id);
        alert('delete with succes');
        this.router
            .navigate(['/rapports'])
            .then(() => window.location.reload());
    }
}
