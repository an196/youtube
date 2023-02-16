import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipHeaderComponent } from './chip-header/chip-header.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashcardComponent } from './dashcard/dashcard.component';
import { SideLoginComponent } from './side-login/side-login.component';
import { ProfilePopupComponent } from './profile-popup/profile-popup.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    declarations: [ChipHeaderComponent, DashcardComponent, SideLoginComponent, ProfilePopupComponent],
    imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule, MatMenuModule],
    exports: [ChipHeaderComponent, DashcardComponent, SideLoginComponent,ProfilePopupComponent],
})
export class DashboardWidgetModule { }
