import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { icons } from './sidemenu-icon';

@Component({
    selector: 'app-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss'],
})
export class SidemenuItemComponent implements OnInit {
    @Input() menus: any = [];

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
        iconRegistry.addSvgIconLiteral(
            'videos-watched',
            sanitizer.bypassSecurityTrustHtml(icons.circle_clock)
        );
        iconRegistry.addSvgIconLiteral(
            'your-videos',
            sanitizer.bypassSecurityTrustHtml(icons.play)
        );
        iconRegistry.addSvgIconLiteral(
            'watch-it-later',
            sanitizer.bypassSecurityTrustHtml(icons.clock)
        );
        iconRegistry.addSvgIconLiteral(
            'videos-liked',
            sanitizer.bypassSecurityTrustHtml(icons.thumbup)
        );
        iconRegistry.addSvgIconLiteral(
            'popular',
            sanitizer.bypassSecurityTrustHtml(icons.fire)
        );
        iconRegistry.addSvgIconLiteral(
            'music',
            sanitizer.bypassSecurityTrustHtml(icons.music)
        );
        iconRegistry.addSvgIconLiteral(
            'game',
            sanitizer.bypassSecurityTrustHtml(icons.heartgame)
        );
        iconRegistry.addSvgIconLiteral(
            'news',
            sanitizer.bypassSecurityTrustHtml(icons.newspaper)
        );
        iconRegistry.addSvgIconLiteral(
            'sports',
            sanitizer.bypassSecurityTrustHtml(icons.cup)
        );
        iconRegistry.addSvgIconLiteral(
            'creator-studio',
            sanitizer.bypassSecurityTrustHtml(icons.createyt)
        );
        iconRegistry.addSvgIconLiteral(
            'youTube-music',
            sanitizer.bypassSecurityTrustHtml(icons.playyt)
        );
        iconRegistry.addSvgIconLiteral(
            'youTube-kids',
            sanitizer.bypassSecurityTrustHtml(icons.playyt2)
        );
        iconRegistry.addSvgIconLiteral(
            'youTube-tv',
            sanitizer.bypassSecurityTrustHtml(icons.palyyt3)
        );
        iconRegistry.addSvgIconLiteral(
            'setting',
            sanitizer.bypassSecurityTrustHtml(icons.setting)
        );
        iconRegistry.addSvgIconLiteral(
            'log-report',
            sanitizer.bypassSecurityTrustHtml(icons.flag)
        );
        iconRegistry.addSvgIconLiteral(
            'help',
            sanitizer.bypassSecurityTrustHtml(icons.questions)
        );
        iconRegistry.addSvgIconLiteral(
            'feedback',
            sanitizer.bypassSecurityTrustHtml(icons.feedback)
        );
    }

    ngOnInit(): void {}
}
