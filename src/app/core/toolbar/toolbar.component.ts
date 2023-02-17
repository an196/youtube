import { Component, Input, OnInit } from '@angular/core';

import { icons } from './icons-element';
import { IconService } from 'app/shared/services/icon.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    constructor(private iconService: IconService) {
        iconService.registerIcons(icons)
    }

    @Input() sidemenu: any;

    ngOnInit() {}
}
