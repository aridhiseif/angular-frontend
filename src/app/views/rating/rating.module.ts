import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingRoutingModule } from './rating-routing.module';
import { RatingHomeComponent } from './rating-home/rating-home.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { ListRatingComponent } from './list-rating/list-rating.component';
import { UpdateRatingComponent } from './update-rating/update-rating.component';


@NgModule({
  declarations: [
    RatingHomeComponent,
    AddRatingComponent,
    ListRatingComponent,
    UpdateRatingComponent
  ],
  imports: [
    CommonModule,
    RatingRoutingModule
  ]
})
export class RatingModule { }
