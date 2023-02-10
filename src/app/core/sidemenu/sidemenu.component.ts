import { Component } from '@angular/core';
import { menus, menus2, menus3, menus4, menus5 } from './menu-element';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
    public menus = menus;
    public menus2 = menus2;
    public menus3 = menus3;
    public menus4 = menus4;
    public menus5 = menus5;
}
