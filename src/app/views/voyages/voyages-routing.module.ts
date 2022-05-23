import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddVoyageComponent} from './add-voyage/add-voyage.component';
import {HomeVoyageComponent} from './home-voyage/home-voyage.component';
import {ListVoyageComponent} from './list-voyage/list-voyage.component';
import {UpdateVoyageComponent} from './update-voyage/update-voyage.component';

const routes: Routes = [
    {
        path: '',
        component: HomeVoyageComponent,
        children: [
            {
                path: '',
                component: ListVoyageComponent
            },
            {
                path: 'addvoyage',
                component: AddVoyageComponent
            },
            {
                path: 'updatevoyage/:id',
                component: UpdateVoyageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoyagesRoutingModule {}
