import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipHeaderComponent } from './chip-header/chip-header.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ChipHeaderComponent],
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule],
  exports: [ChipHeaderComponent],
})
export class DashboardWidgetModule {}
