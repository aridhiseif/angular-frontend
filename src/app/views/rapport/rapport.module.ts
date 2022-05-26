import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RapportRoutingModule } from './rapport-routing.module';
import { RapportHomeComponent } from './rapport-home/rapport-home.component';
import { ListRapportComponent } from './list-rapport/list-rapport.component';
import { AddRapportComponent } from './add-rapport/add-rapport.component';
import { UpdateRapportComponent } from './update-rapport/update-rapport.component';


@NgModule({
  declarations: [
    RapportHomeComponent,
    ListRapportComponent,
    AddRapportComponent,
    UpdateRapportComponent
  ],
  imports: [
    CommonModule,
    RapportRoutingModule
  ]
})
export class RapportModule { }
