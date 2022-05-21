import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../app.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
    ItemsArray= [];
    constructor(private restApiService: ApiService,   public router: Router) { }

    ngOnInit() {
      this.restApiService.getClients().subscribe((res: any[])=>{
        this.ItemsArray= res;
      })  
    }
  
    
    deleteClient(id){
        this.restApiService.deleteClient(id);
        alert("delete with succes");
        this.router.navigate(['/client']);
      }
    
  
  }
  