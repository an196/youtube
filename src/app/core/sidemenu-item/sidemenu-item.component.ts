import { Component, Input, OnInit } from '@angular/core';

import { resgiteryIcons } from './sidemenu-icon';
import { IconService } from 'app/shared/services/icon.service';

@Component({
    selector: 'app-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss'],
})
export class SidemenuItemComponent implements OnInit {
    @Input() menus: any = [];

    constructor( iconService: IconService) {
        iconService.registerIcons(resgiteryIcons);
    }

    ngOnInit(): void { }
}
