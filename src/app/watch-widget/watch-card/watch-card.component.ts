import { Component, Input,OnInit } from '@angular/core';
import { IconService } from 'app/shared/services/icon.service';

import { icons } from './icons-elements';
@Component({
    selector: 'app-watch-card',
    templateUrl: './watch-card.component.html',
    styleUrls: ['./watch-card.component.scss'],
})
export class WatchCardComponent implements OnInit{
    @Input() video!: any; 
    imgSrc: string = '';
    constructor(private iconSerVice: IconService) {
        iconSerVice.registerIcons(icons);
    }

    ngOnInit(): void {
        this.imgSrc = this.video.infoVideo.thumbnail;
    }
}
