import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isDevMode } from '@angular/core';
import { Short } from 'app/shared/interface/short.interface';
import { IconService } from 'app/shared/services/icon.service';
import { icons, reactBtns } from './icon-element';

import { shorts } from 'data/dummy.data';

@Component({
  selector: 'app-short-large',
  templateUrl: './short-large.component.html',
  styleUrls: ['./short-large.component.scss']
})
export class ShortLargeComponent implements OnInit, AfterViewInit {
  @Input() short!: Short;
  @ViewChild('shortVideo') shortVideo!: any;

  videoUrl: SafeResourceUrl = '';
  isMuted: boolean = false;
  isPlay: boolean = true;
  reactBtns = reactBtns;
  _idVideo!: string | null;

  constructor(sanitizer: DomSanitizer,
    private route: ActivatedRoute, iconService: IconService) {
    iconService.registerIcons(icons);

    
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // if (isDevMode() && this.shortVideo) {
    //   let videoControl = this.shortVideo.nativeElement;
    //   videoControl.muted = 'muted';
    // }
  }

  toggleMuted() {
    if (this.shortVideo) {
      let videoControl = this.shortVideo.nativeElement;
      this.isMuted = !this.isMuted;
      videoControl.muted = this.isMuted ? 'muted' : '';
    }

  }

  togglePlay() {
    if (this.shortVideo) {
      let videoControl = this.shortVideo.nativeElement;
      this.isPlay = !this.isPlay;
      this.isPlay ? videoControl.play() : videoControl.pause();
    }
  }


}
