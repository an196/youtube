import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { icons } from '../sidemenu-item/sidemenu-icon';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconLiteral(
            'home',
            sanitizer.bypassSecurityTrustHtml(icons.home)
        );
        iconRegistry.addSvgIconLiteral(
            'shorts',
            sanitizer.bypassSecurityTrustHtml(icons.shorts)
        );
        iconRegistry.addSvgIconLiteral(
            'channel',
            sanitizer.bypassSecurityTrustHtml(icons.channel)
        );
        iconRegistry.addSvgIconLiteral(
            'library',
            sanitizer.bypassSecurityTrustHtml(icons.library)
        );
    }
}
