import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortLargeComponent } from './short-large/short-large.component';
import { ShortSmallComponent } from './short-small/short-small.component';
import { MatIconModule } from '@angular/material/icon';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { ShortActionComponent } from './short-action/short-action.component';
import { BottomControlComponent } from './bottom-control/bottom-control.component';



@NgModule({
  declarations: [
    ShortLargeComponent,
    ShortSmallComponent,
    ShortActionComponent,
    BottomControlComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
  ],
  exports: [
    ShortLargeComponent,
    ShortSmallComponent,
    ShortActionComponent,
    BottomControlComponent
  ]
})
export class ShortWidgetModule { }
