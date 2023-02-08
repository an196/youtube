import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { icons } from './watch-primary-icon';

@Component({
  selector: 'app-watch-primary',
  templateUrl: './watch-primary.component.html',
  styleUrls: ['./watch-primary.component.scss']
})
export class WatchPrimaryComponent implements OnInit, AfterViewInit {

  @ViewChild('playerMedia', { static: true }) playerMedia!: ElementRef;

  heightMediaFrame!: string;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setMediaFrameHeight();
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
  }

  ngOnInit() {
    
  }
  
  ngAfterViewInit() {
    this.setMediaFrameHeight();
  }

  setMediaFrameHeight(): void {
    const widthPlayerMedia = this.playerMedia.nativeElement.offsetWidth;
    this.heightMediaFrame = (widthPlayerMedia * 720 /1280).toString() + 'px';
  }
}
