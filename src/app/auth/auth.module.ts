import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './lazyloader.routes';
import { CoreModule } from '../core/core.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatSidenavModule,
    MatToolbarModule,
    CoreModule,
  ],
  providers: [],
})
export class AuthModule {}
