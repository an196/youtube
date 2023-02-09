import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { icons } from './watch-primary-icon';
import { menus } from './menu-elements';

@Component({
  selector: 'app-watch-primary',
  templateUrl: './watch-primary.component.html',
  styleUrls: ['./watch-primary.component.scss']
})
export class WatchPrimaryComponent implements OnInit, AfterViewInit {

  @ViewChild('playerMedia', { static: true }) playerMedia!: ElementRef;

  heightMediaFrame!: string;
  public menus = [...menus];
  private originMenus = [...menus];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setMediaFrameHeight();
    this.initMenu();
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'thumbup',
      sanitizer.bypassSecurityTrustHtml(icons.thumbup)
    );
    iconRegistry.addSvgIconLiteral(
      'thumbdown',
      sanitizer.bypassSecurityTrustHtml(icons.thumbdown)
    );
    iconRegistry.addSvgIconLiteral(
      'share',
      sanitizer.bypassSecurityTrustHtml(icons.share)
    );
    iconRegistry.addSvgIconLiteral(
      'scissor',
      sanitizer.bypassSecurityTrustHtml(icons.scissor)
    );
    iconRegistry.addSvgIconLiteral(
      'threelineplus',
      sanitizer.bypassSecurityTrustHtml(icons.threelineplus)
    );
    iconRegistry.addSvgIconLiteral(
      'threedots',
      sanitizer.bypassSecurityTrustHtml(icons.threedots)
    );
  }

  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    this.setMediaFrameHeight();
    this.initMenu();
  }

  setMediaFrameHeight(): void {
    const widthPlayerMedia = this.playerMedia.nativeElement.offsetWidth;
    this.heightMediaFrame = (widthPlayerMedia * 720 /1280).toString() + 'px';
  }

  initMenu(){
    const innerWidth = window.innerWidth;
    if(innerWidth < 1624 && this.menus.length === 3) {
      this.menus.pop();
    }
    if(innerWidth < 1444 && this.menus.length === 2) {
      this.menus.pop();
    }
    if(innerWidth >= 1444 && this.menus.length === 1) {
     
      this.menus.push(this.originMenus[1]);
    }
    if(innerWidth >= 1624 && this.menus.length === 2) {
      this.menus.push(this.originMenus[2]);
    }
  }
}
