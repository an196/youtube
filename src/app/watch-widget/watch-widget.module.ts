import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchCardComponent } from './watch-card/watch-card.component';
import {  MatIconModule } from '@angular/material/icon';
import { ChipsetComponent } from './chipset/chipset.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [WatchCardComponent, ChipsetComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [
    WatchCardComponent,
    ChipsetComponent
  ]
})
export class WatchWidgetModule { }
