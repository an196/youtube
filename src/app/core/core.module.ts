import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

//icon
import { SharedModule } from 'app/shared/shared.module'; 

@NgModule({
  declarations: [SidemenuComponent, SidemenuItemComponent],
  imports: [CommonModule, MatListModule, MatIconModule, SharedModule],
  exports: [SidemenuComponent, SidemenuItemComponent],
  providers: [],
})
export class CoreModule {}
