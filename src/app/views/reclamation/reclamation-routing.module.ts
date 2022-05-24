import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddReclamationComponent} from './add-reclamation/add-reclamation.component';
import {ListReclamationComponent} from './list-reclamation/list-reclamation.component';
import {ReclamationHomeComponent} from './reclamation-home/reclamation-home.component';
import {UpdateReclamationComponent} from './update-reclamation/update-reclamation.component';

const routes: Routes = [
    {
        path: '',
        component: ReclamationHomeComponent,
        children: [
            {
                path: '',
                component: ListReclamationComponent
            },
            {
                path: 'addreclamation',
                component: AddReclamationComponent
            },
            {
                path: 'updatereclamation/:id',
                component: UpdateReclamationComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReclamationRoutingModule {}
