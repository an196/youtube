import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { customIcon } from '../interface/customIcon.interface';

@Injectable({ providedIn: 'root' })
export class IconService {

    _iconRegistry!: MatIconRegistry;
    _sanitizer!: DomSanitizer;

    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        this._iconRegistry = iconRegistry;
        this._sanitizer = sanitizer;;

    }

    public registerIcon(icon: customIcon) {
        this._iconRegistry.addSvgIconLiteral(
            icon.name,
            this._sanitizer.bypassSecurityTrustHtml(icon.icon)
        );
    }

    public registerIcons(icons: customIcon[]) {
        for (const icon of icons) {
            this._iconRegistry.addSvgIconLiteral(
                icon.name,
                this._sanitizer.bypassSecurityTrustHtml(icon.icon)
            );
        }
    }
}