import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const THREEDOT_ICON = `<svg viewBox="0 0 24 24"><g><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></g></svg>  `;

@Component({
    selector: 'app-dashcard',
    templateUrl: './dashcard.component.html',
    styleUrls: ['./dashcard.component.scss'],
})
export class DashcardComponent {
    @Input() video: any;

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconLiteral(
            'threedots',
            sanitizer.bypassSecurityTrustHtml(THREEDOT_ICON)
        );
    }
}
