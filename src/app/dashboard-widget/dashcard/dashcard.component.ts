import { Component, Input } from '@angular/core';
import { IconService } from 'app/shared/services/icon.service';

import { icons } from './icons-element';

@Component({
    selector: 'app-dashcard',
    templateUrl: './dashcard.component.html',
    styleUrls: ['./dashcard.component.scss'],
})
export class DashcardComponent {
    @Input() video: any;

    constructor(private iconSerVice: IconService) {
        iconSerVice.registerIcons(icons);
    }
}
