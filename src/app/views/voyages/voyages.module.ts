import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoyagesRoutingModule } from './voyages-routing.module';
import { ListVoyageComponent } from './list-voyage/list-voyage.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component';
import { HomeVoyageComponent } from './home-voyage/home-voyage.component';


@NgModule({
  declarations: [
    ListVoyageComponent,
    AddVoyageComponent,
    UpdateVoyageComponent,
    HomeVoyageComponent
  ],
  imports: [
    CommonModule,
    VoyagesRoutingModule
  ]
})
export class VoyagesModule { }
