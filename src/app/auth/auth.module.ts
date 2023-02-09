import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './lazyloader.routes';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardCrmModule } from 'app/dashboard-crm/dashboard-crm.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatSidenavModule,
    MatToolbarModule,
    CoreModule,
    DashboardCrmModule,
  ],
  providers: [],
})
export class AuthModule {}
