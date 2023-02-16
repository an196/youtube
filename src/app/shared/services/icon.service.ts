import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({ providedIn: 'root' })
export class IconService {

    _iconRegistry!: MatIconRegistry;
    _sanitizer!: DomSanitizer;

    constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        this._iconRegistry = iconRegistry;
        this._sanitizer = sanitizer;;

    }

    public registerIcon(name: string, icon: string) {
        this._iconRegistry.addSvgIconLiteral(
            name,
            this._sanitizer.bypassSecurityTrustHtml(icon)
        );
    }

    public registerIcons(icons: any) {
        for (const icon of icons) {
            this._iconRegistry.addSvgIconLiteral(
                icon.name,
                this._sanitizer.bypassSecurityTrustHtml(icon.icon)
            );
        }
    }
}