import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-list-voyage',
    templateUrl: './list-voyage.component.html',
    styleUrls: ['./list-voyage.component.scss']
})
export class ListVoyageComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit(): void {
        this.restApiService.getVoyages().subscribe((res: any[]) => {
            this.ItemsArray = res;
            console.log(res);
        });
    }

    deleteVoyage(id) {
        this.restApiService.deleteVoyage(id);
        alert('delete with succes');
        this.router.navigate(['/voyages']).then(() => window.location.reload());
    }
}
