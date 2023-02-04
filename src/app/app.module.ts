import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { AppComponent } from './app.component';
import { DashboardCrmComponent } from './dashboard-crm/dashboard-crm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, DashboardCrmComponent],
  imports: [BrowserModule, LazyLoadModule, CoreModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
