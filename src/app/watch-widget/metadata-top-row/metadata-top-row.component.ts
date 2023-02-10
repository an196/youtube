import { Component, HostListener, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { menus } from './menus-elements';
import { icons } from './icons';

@Component({
  selector: 'app-metadata-top-row',
  templateUrl: './metadata-top-row.component.html',
  styleUrls: ['./metadata-top-row.component.scss']
})
export class MetadataTopRowComponent implements OnInit{
  public menus = [...menus];
  private originMenus = [...menus];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
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

  ngOnInit(): void {
    this.initMenu();
  }

  initMenu(){
    const innerWidth = window.innerWidth;
    if(innerWidth < 1624 && this.menus.length === 3) {
      this.menus.pop();
    }
    if(innerWidth < 1444 && this.menus.length === 2) {
      this.menus.pop();
    }
    if(innerWidth < 688 && this.menus.length === 1) {
      this.menus.push(this.originMenus[1]);
      this.menus.push(this.originMenus[2]);
    }
    if(innerWidth < 628 && this.menus.length === 3) {
      this.menus.pop();
    }
    if(innerWidth < 538 && this.menus.length === 2) {
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
