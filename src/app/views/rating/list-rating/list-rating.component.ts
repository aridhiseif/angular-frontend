import {Component, OnInit} from '@angular/core';
import {ApiService} from 'src/app/app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-list-rating',
    templateUrl: './list-rating.component.html',
    styleUrls: ['./list-rating.component.scss']
})
export class ListRatingComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit() {
        this.restApiService.getRatings().subscribe((res: any[]) => {
            this.ItemsArray = res;
            console.log(res);
        });
    }

    deleteRating(id) {
        this.restApiService.deleteRating(id);
        alert('delete with succes');
        this.router.navigate(['/ratings']).then(() => window.location.reload());
    }
}
