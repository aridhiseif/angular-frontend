import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-formateur',
    templateUrl: './formateur.component.html',
    styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {
    ItemsArray= [];
    constructor(private restApiService: ApiService,   public router: Router) { }

    ngOnInit() {
      this.restApiService.getEnseignats().subscribe((res: any[])=>{
        this.ItemsArray= res;
      })  
    }
  
    
    deleteFormateur(id){
        this.restApiService.deleteCourse(id);
        alert("delete with succes");
        this.router.navigate(['/formateur']);
      }
    
  
  }
  