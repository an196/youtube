import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchCardComponent } from './watch-card/watch-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ChipsetComponent } from './chipset/chipset.component';
import { MatChipsModule } from '@angular/material/chips';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    WatchCardComponent,
    ChipsetComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [
    WatchCardComponent,
    ChipsetComponent,
    DescriptionComponent
  ]
})
export class WatchWidgetModule { }
