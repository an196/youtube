import { Component, ViewChild } from '@angular/core';

import { icons } from './icons-element'; 
import { IconService } from 'app/shared/services/icon.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
    constructor(private iconSerVice: IconService) {
        iconSerVice.registerIcons(icons);
    }
}
