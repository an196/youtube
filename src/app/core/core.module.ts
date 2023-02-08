import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';

//icon
import { SharedModule } from 'app/shared/shared.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { WatchPrimaryComponent } from './watch-primary/watch-primary.component';
import { WatchSecondComponent } from './watch-second/watch-second.component';
import { WatchWidgetModule } from 'app/watch-widget/watch-widget.module';

@NgModule({
  declarations: [
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    SearchbarComponent,
    SidebarComponent,
    SidenavComponent,
    WatchPrimaryComponent,
    WatchSecondComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    MatToolbarModule,
    MatBadgeModule,
    WatchWidgetModule
  ],
  exports: [
    SidemenuComponent,
    SidemenuItemComponent,
    ToolbarComponent,
    SearchbarComponent,
    SidebarComponent,
    SidenavComponent,
    WatchPrimaryComponent,
    WatchSecondComponent,
  ],
  providers: [],
})
export class CoreModule {}
