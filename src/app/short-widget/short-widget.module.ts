import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortLargeComponent } from './short-large/short-large.component';
import { ShortSmallComponent } from './short-small/short-small.component';
import { MatIconModule } from '@angular/material/icon';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';



@NgModule({
  declarations: [
    ShortLargeComponent,
    ShortSmallComponent
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
    ShortSmallComponent
  ]
})
export class ShortWidgetModule { }
