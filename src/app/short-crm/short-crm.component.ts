import { AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Short } from 'app/shared/interface/short.interface';
import { ShortService } from 'app/shared/services/short.service';

import { shorts } from 'data/dummy.data';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-short-crm',
  templateUrl: './short-crm.component.html',
  styleUrls: ['./short-crm.component.scss']
})
export class ShortCrmComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  _shorts: Short[] = [...shorts];
  _currentCoodinate = 0;
  _isScroll = false;
  _selectedVideoId!: string;

  @ViewChild('shortcontainer') shortcontainer!: ElementRef;

  constructor(private shortService: ShortService, private route: ActivatedRoute) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this._selectedVideoId = params.get('id') as string;
    });

    //get data
    this.shortService.getShorts().subscribe(
      next => (results: Short[]) => {
        if (results && results.length > 0) {
          this._shorts = [...results];
        }
      },
      error => console.log(error),
      () => this.initPlay()
    )

  }


  ngOnInit(): void {

  }

  ngDoCheck(): void {

  }
  ngAfterViewInit(): void {
    this.initPlay();
  }
  ngAfterViewChecked(): void {
  }

  togglePlayVideo(video: any, shouldPlay: any) {
    if (shouldPlay) return video.play();

    video.pause();
    video.currentTime = 0;

  }

  initPlay() {
    const videoEle = this.shortcontainer?.nativeElement.querySelectorAll('video');

    const options = { root: null, rootMargin: '0px', threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => this.togglePlayVideo(entry.target, entry.isIntersecting));
    }, options);

    videoEle.forEach((target: any) => observer.observe(target));
  }


}
