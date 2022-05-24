import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationRoutingModule } from './reclamation-routing.module';
import { ReclamationHomeComponent } from './reclamation-home/reclamation-home.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { UpdateReclamationComponent } from './update-reclamation/update-reclamation.component';
import { ListReclamationComponent } from './list-reclamation/list-reclamation.component';


@NgModule({
  declarations: [
    ReclamationHomeComponent,
    AddReclamationComponent,
    UpdateReclamationComponent,
    ListReclamationComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule
  ]
})
export class ReclamationModule { }
