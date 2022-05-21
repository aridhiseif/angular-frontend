import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-addcourse',
    templateUrl: './addcourse.component.html',
    styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {
 

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      } 
    
  
    
      constructor(
        private http: HttpClient,
        public router: Router
      ) {
        
      }
    
      ngOnInit() { }
    
    
    
    
    
      
    
    
      submitForm(value: string,value2: string) {
    
    
    
     
    
    
    
    
    const body = { codeC: value,  libelleC :value2 }
    
    console.log(body);
        this.http.post('http://127.0.0.1:8080/addCours', body , this.httpOptions).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        
        )
        alert("course added");
        this.router.navigate(['/course']);
        return false;
    
      }
      }