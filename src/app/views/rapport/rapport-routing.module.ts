import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddRapportComponent} from './add-rapport/add-rapport.component';
import {ListRapportComponent} from './list-rapport/list-rapport.component';
import {RapportHomeComponent} from './rapport-home/rapport-home.component';
import {UpdateRapportComponent} from './update-rapport/update-rapport.component';

const routes: Routes = [
    {
        path: '',
        component: RapportHomeComponent,
        children: [
            {
                path: '',
                component: ListRapportComponent
            },
            {
                path: 'addrapport',
                component: AddRapportComponent
            },
            {
                path: 'updaterapport/:id',
                component: UpdateRapportComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RapportRoutingModule {}
