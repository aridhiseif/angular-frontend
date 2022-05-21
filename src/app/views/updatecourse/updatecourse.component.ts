import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-updatecourse',
    templateUrl: './updatecourse.component.html',
    styleUrls: ['./updatecourse.component.scss']
})
export class UpdatecourseComponent implements OnInit {
    id = 1;
    dataone;
 
 
   httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
   } 
 

 
   constructor(
   
     private http: HttpClient,
     public router: Router,
     private actRoute: ActivatedRoute
   ) {
     
 
     this.id = this.actRoute.snapshot.params.id;
   }
 
 
 
   ngOnInit() { 
 
     this.http.get<any[]>('http://127.0.0.1:3000/courses/'+ this.id , this.httpOptions).subscribe((res: any)=>{
       this.dataone= res;
       console.log(this.dataone);
     })  
     
     
     
   }
 
 
 
 
 
   
 
 
   submitForm(value: string,value2: string) {
  
 
 
  
 
 
 
 
 const body = { titre: value,  description :value2 }
 
 console.log(body);
     this.http.put('http://127.0.0.1:3000/courses/'+ this.id , body , this.httpOptions).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     
     )
     alert("cours updated");
     this.router.navigate(['/course']);
     return false;
 
   }
   }