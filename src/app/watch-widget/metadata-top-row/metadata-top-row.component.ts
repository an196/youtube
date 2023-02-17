import { Component, HostListener, OnInit } from '@angular/core';

import { menus } from './menus-elements';
import { icons } from './icons';
import { IconService } from 'app/shared/services/icon.service';

@Component({
    selector: 'app-metadata-top-row',
    templateUrl: './metadata-top-row.component.html',
    styleUrls: ['./metadata-top-row.component.scss'],
})
export class MetadataTopRowComponent implements OnInit {
    public menus = [...menus];
    private originMenus = [...menus];

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.initMenu();
    }

    constructor(private iconService: IconService) {
        iconService.registerIcons(icons);
    }

    ngOnInit(): void {
        this.initMenu();
    }

    initMenu() {
        const innerWidth = window.innerWidth;
        if (innerWidth < 1624 && this.menus.length === 3) {
            this.menus.pop();
        }
        if (innerWidth < 1444 && this.menus.length === 2) {
            this.menus.pop();
        }
        if (innerWidth < 688 && this.menus.length === 1) {
            this.menus.push(this.originMenus[1]);
            this.menus.push(this.originMenus[2]);
        }
        if (innerWidth < 628 && this.menus.length === 3) {
            this.menus.pop();
        }
        if (innerWidth < 538 && this.menus.length === 2) {
            this.menus.pop();
        }

        if (innerWidth >= 1444 && this.menus.length === 1) {
            this.menus.push(this.originMenus[1]);
        }
        if (innerWidth >= 1624 && this.menus.length === 2) {
            this.menus.push(this.originMenus[2]);
        }
    }
}
