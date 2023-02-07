import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipHeaderComponent } from './chip-header/chip-header.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashcardComponent } from './dashcard/dashcard.component';

@NgModule({
  declarations: [ChipHeaderComponent, DashcardComponent, ],
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule],
  exports: [ChipHeaderComponent, DashcardComponent, ],
})
export class DashboardWidgetModule { }
