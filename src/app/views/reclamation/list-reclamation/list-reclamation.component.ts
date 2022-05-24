import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-list-reclamation',
    templateUrl: './list-reclamation.component.html',
    styleUrls: ['./list-reclamation.component.scss']
})
export class ListReclamationComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit() {
        this.restApiService.getReclamations().subscribe((res: any[]) => {
            this.ItemsArray = res;
        });
    }
    deleteReclamation(id) {
        this.restApiService.deleteReclamation(id);
        alert('delete with succes');
        this.router
            .navigate(['/reclamations'])
            .then(() => window.location.reload());
    }
}
