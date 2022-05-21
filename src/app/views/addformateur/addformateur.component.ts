import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-addformateur',
    templateUrl: './addformateur.component.html',
    styleUrls: ['./addformateur.component.scss']
})
export class AddformateurComponent implements OnInit {
 

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
    
    
    
    
    
      
    
    
      submitForm(value: string,value2: string, value3 : string , value4 : string , value5 : string, value6 : string) {
    
    
    
     
    
    
    
    
        const body = { firstname: value,  lastname :value2, email :value3, tel: value4, password : value5, specialite : value6 }
    
    console.log(body);
        this.http.post('http://127.0.0.1:3000/formateurs', body , this.httpOptions).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        
        )
        alert("enseignat added");
        this.router.navigate(['/formateur']);
        return false;
    
      }
      }