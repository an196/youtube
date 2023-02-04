import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [{ path: 'dashboard', component: DashboardCrmComponent }],
  },
];
