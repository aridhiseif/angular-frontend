import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../app.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    ItemsArray = [];
    constructor(private restApiService: ApiService, public router: Router) {}

    ngOnInit() {
        this.restApiService.getAdmins().subscribe((res: any[]) => {
            this.ItemsArray = res;
        });
    }

    deleteAdmin(id) {
        this.restApiService.deleteAdmin(id);
        alert('delete with succes');
        this.router.navigate(['/admin']).then(() => window.location.reload());
    }
}
