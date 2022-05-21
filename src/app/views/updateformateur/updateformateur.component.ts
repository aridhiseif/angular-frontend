import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-updateformateur',
    templateUrl: './updateformateur.component.html',
    styleUrls: ['./updateformateur.component.scss']
})
export class UpdateformateurComponent implements OnInit {
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
 
     this.http.get<any[]>('http://127.0.0.1:3000/formateurs/'+ this.id , this.httpOptions).subscribe((res: any)=>{
       this.dataone= res;
       console.log(this.dataone);
     })  
     
     
     
   }
 
 
 
 
 
   
 
 
   submitForm(value: string,value2: string, value3 : string , value4 : string , value5 : string, value6 : string) {
    
    
    
     
    
    
    
    
    const body = { firstname: value,  lastname :value2, email :value3, tel: value4, password : value5, specialite : value6 }
 
 console.log(body);
     this.http.put('http://127.0.0.1:3000/formateurs/'+ this.id , body , this.httpOptions).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     
     )
     alert("formateur updated");
     this.router.navigate(['/formateur']);
     return false;
 
   }
   }