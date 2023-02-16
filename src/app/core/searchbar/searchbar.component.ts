import { AfterViewChecked, Component, HostListener, OnInit } from '@angular/core';

import { icons } from './icons-element';
import { IconService } from 'app/shared/services/icon.service';


@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit, AfterViewChecked {
    onMobile!: boolean;
    isFocusingInput: boolean = false;

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

    ngAfterViewChecked(): void {
    }

    initState() {
        const innerWidth = window.innerWidth;
        innerWidth < 656 ? (this.onMobile = true) : (this.onMobile = false);
    }
}
