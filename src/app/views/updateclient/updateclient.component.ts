import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-updateclient',
    templateUrl: './updateclient.component.html',
    styleUrls: ['./updateclient.component.scss']
})
export class UpdateclientComponent implements OnInit {
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
 
     this.http.get<any[]>('http://127.0.0.1:3000/clients/'+ this.id , this.httpOptions).subscribe((res: any)=>{
       this.dataone= res;
       console.log(this.dataone);
     })  
     
     
     
   }
 
 
 
 
 
   
 
 
   submitForm(value: string,value2: string, value3 : string , value4 : string , value5 : string) {
    
    
    
     
    
    
    
    
    const body = { firstname: value,  lastname :value2, email :value3, tel: value4, password : value5 }
 
 console.log(body);
     this.http.put('http://127.0.0.1:3000/clients/'+ this.id , body , this.httpOptions).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     
     )
     alert("client updated");
     this.router.navigate(['/client']);
     return false;
 
   }
   }