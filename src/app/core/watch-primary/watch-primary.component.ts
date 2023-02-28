import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { icons } from './watch-primary-icon';
import { menus } from './menu-elements';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IconService } from 'app/shared/services/icon.service';

@Component({
    selector: 'app-watch-primary',
    templateUrl: './watch-primary.component.html',
    styleUrls: ['./watch-primary.component.scss'],
})
export class WatchPrimaryComponent implements OnInit, AfterContentInit {
    @ViewChild('playerMedia', { static: true }) playerMedia!: ElementRef;

    heightMediaFrame!: string;
    public menus = [...menus];
    private originMenus = [...menus];

    _idVideo!: string | null;
    videoUrl!: SafeResourceUrl;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.setMediaFrameHeight();
        this.initMenu();
    }

    constructor(
        sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private iconService: IconService,
    ) {
       
        iconService.registerIcons(icons);
        this.route.paramMap.subscribe((params: ParamMap) => {
            this._idVideo = params.get('id');
        });

        const baseURl = 'https://www.youtube.com/embed/' + this._idVideo + '?modestbranding=1';
        this.videoUrl = sanitizer.bypassSecurityTrustResourceUrl(baseURl);
    }

    ngOnInit() {
        this.heightMediaFrame = '0px';
    }

    ngAfterContentInit() {
        this.setMediaFrameHeight();
        this.initMenu();
    }

    setMediaFrameHeight(): void {
        const widthPlayerMedia = this.playerMedia.nativeElement.offsetWidth;
        this.heightMediaFrame =
            ((widthPlayerMedia * 720) / 1280).toString() + 'px';
    }

    initMenu() {
        const innerWidth = window.innerWidth;
        if (innerWidth < 1624 && this.menus.length === 3) {
            this.menus.pop();
        }
        if (innerWidth < 1444 && this.menus.length === 2) {
            this.menus.pop();
        }
        if (innerWidth < 688 && this.menus.length === 1) {
            this.menus.push(this.originMenus[1]);
            this.menus.push(this.originMenus[2]);
        }
        if (innerWidth < 628 && this.menus.length === 3) {
            this.menus.pop();
        }
        if (innerWidth < 538 && this.menus.length === 2) {
            this.menus.pop();
        }

        if (innerWidth >= 1444 && this.menus.length === 1) {
            this.menus.push(this.originMenus[1]);
        }
        if (innerWidth >= 1624 && this.menus.length === 2) {
            this.menus.push(this.originMenus[2]);
        }
    }
}
