import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-updateadmin',
    templateUrl: './updateadmin.component.html',
    styleUrls: ['./updateadmin.component.scss']
})
export class UpdateadminComponent implements OnInit {
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
 
     this.http.get<any[]>('http://127.0.0.1:3000/admins/'+ this.id , this.httpOptions).subscribe((res: any)=>{
       this.dataone= res;
       console.log(this.dataone);
     })  
     
     
     
   }
 
 
 
 
 
   
 
 
   submitForm(value: string,value2: string, value3 : string , value4 : string) {
  
 
 
  
 
 
 
 
 const body = { firstName: value,  lastName :value2, email : value3, password : value4 }
 
 console.log(body);
     this.http.put('http://127.0.0.1:3000/admins/'+ this.id , body , this.httpOptions).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     
     )
     alert("admins updated");
     this.router.navigate(['/admin']);
     return false;
 
   }
   }