import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchCardComponent } from './watch-card/watch-card.component';
import { MatIconModule } from '@angular/material/icon';
import { ChipsetComponent } from './chipset/chipset.component';
import { MatChipsModule } from '@angular/material/chips';
import { DescriptionComponent } from './description/description.component';
import { MetadataTopRowComponent } from './metadata-top-row/metadata-top-row.component';

@NgModule({
    declarations: [
        WatchCardComponent,
        ChipsetComponent,
        DescriptionComponent,
        MetadataTopRowComponent,
    ],
    imports: [CommonModule, MatIconModule, MatChipsModule],
    exports: [
        WatchCardComponent,
        ChipsetComponent,
        DescriptionComponent,
        MetadataTopRowComponent,
    ],
})
export class WatchWidgetModule {}
