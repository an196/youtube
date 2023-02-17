import { Component, HostListener, OnInit } from '@angular/core';
import { icons } from './icons-element';
import { IconService } from 'app/shared/services/icon.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    onMobile!: boolean;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.initState();
    }

    constructor(private iconService: IconService) {
        iconService.registerIcons(icons);
    }

    ngOnInit(): void {
        this.initState();
    }

    initState() {
        const innerWidth = window.innerWidth;

        innerWidth < 656 ? (this.onMobile = true) : (this.onMobile = false);
    }
}
