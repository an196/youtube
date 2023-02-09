import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchComponent } from './watch.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoreModule } from 'app/core/core.module';

const routes: Routes = [
  {path: '', component: WatchComponent},
];

@NgModule({
  declarations: [WatchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    CoreModule,
  ],
  exports: [
   
],
})
export class WatchModule { }
