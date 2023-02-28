import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCrmComponent } from './dashboard-crm.component';
import { DashboardWidgetModule } from 'app/dashboard-widget/dashboard-widget.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShortWidgetModule } from 'app/short-widget/short-widget.module';

export const appRoutes: Routes = [
    { path: '', component: DashboardCrmComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
        DashboardWidgetModule,
        ShortWidgetModule,
        MatGridListModule,
        MatIconModule,
    ],
    declarations: [DashboardCrmComponent],
})
export class DashboardCrmModule {}
