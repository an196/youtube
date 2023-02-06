import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { DashboardWidgetModule } from 'app/dashboard-widget/dashboard-widget.module';
import { MatIcon } from '@angular/material/icon';

export const appRoutes: Routes = [
  { path: '', component: DashboardCrmComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    DashboardWidgetModule,
  ],
  declarations: [DashboardCrmComponent],
})
export class DashboardCrmModule {}
