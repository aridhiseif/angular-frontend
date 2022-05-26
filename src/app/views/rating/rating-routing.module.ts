import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddRatingComponent} from './add-rating/add-rating.component';
import {ListRatingComponent} from './list-rating/list-rating.component';
import {RatingHomeComponent} from './rating-home/rating-home.component';
import {UpdateRatingComponent} from './update-rating/update-rating.component';

const routes: Routes = [
    {
        path: '',
        component: RatingHomeComponent,
        children: [
            {
                path: '',
                component: ListRatingComponent
            },
            {
                path: 'addrating',
                component: AddRatingComponent
            },
            {
                path: 'updaterating/:id',
                component: UpdateRatingComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RatingRoutingModule {}
