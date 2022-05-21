import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
    ItemsArray= [];
    constructor(private restApiService: ApiService,   public router: Router) { }

    ngOnInit() {
      this.restApiService.getCourses().subscribe((res: any[])=>{
        this.ItemsArray= res;
      })  
    }
  
    
    deleteCourse(id){
        this.restApiService.deleteCourse(id);
        alert("delete with succes");
        this.router.navigate(['/course']);
      }
    
  
  }
  