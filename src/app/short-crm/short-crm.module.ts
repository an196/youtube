import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortWidgetModule } from 'app/short-widget/short-widget.module';
import { RouterModule, Routes } from '@angular/router';
import { ShortCrmComponent } from './short-crm.component';

export const appRoutes: Routes   = [
  { path: '', component: ShortCrmComponent },
];

@NgModule({
  declarations: [ShortCrmComponent],
  imports: [
    CommonModule,
    ShortWidgetModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class ShortCrmModule { }
