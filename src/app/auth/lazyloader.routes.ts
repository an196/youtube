import { AuthComponent } from './auth.component';
import { Routes } from '@angular/router';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { ShortCrmComponent } from 'app/short-crm/short-crm.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            { path: 'dashboard', component: DashboardCrmComponent },
            { path: 'shorts/:id', component: ShortCrmComponent },
        ],

    },
];
