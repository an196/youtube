import { DoCheck, AfterContentChecked, AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Short } from 'app/shared/interface/short.interface';
import { Video } from 'app/shared/interface/video.interface';
import { IconService } from 'app/shared/services/icon.service';
import { ShortService } from 'app/shared/services/short.service';
import { VideoService } from 'app/shared/services/video.service';
import { videos, shorts } from 'data/dummy.data';
import { BehaviorSubject } from 'rxjs';

import { icons } from './icon-element';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss'],
})
export class DashboardCrmComponent implements OnInit, AfterContentChecked, AfterViewInit, DoCheck, OnDestroy {
    private width$ = new BehaviorSubject<number>(0);

    private observer!: any;
    private itemPerRow = 4;
    private countLoop = 2;
    _videos: Video[] = [...videos];
    private tempVideos!: Video[] | any;
    public showVideos!: Video[][];

    public shortsPerRow: number = 8;
    _shorts:  Short[] = [...shorts];

    @ViewChild('dashcard') dashcard!: ElementRef;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.initItemPerRow();
    }

    constructor(private host: ElementRef, private zone: NgZone, private videoService: VideoService,
        private shortService: ShortService,
        private iconService: IconService) {
        iconService.registerIcons(icons);
    }

    ngOnInit(): void {
        //get video data
        this.videoService.getVideos().subscribe(
            (results: Video[]) => {
                if (results && results.length > 0)
                    this._videos = [...results];
            },
            err => console.log(err)
        );

        this.shortService.getShorts().subscribe(
            (results: Short[]) => {
                if (results && results.length > 0)
                    this._shorts = [...results];
            },
            err => console.log(err)
        );

        //get video data
        
        //init view
        this.observer = new ResizeObserver(entries => {
            this.zone.run(() => {
                this.width$.next(entries[0].contentRect.width);

            });
            this.onDashboardToggle();
            this.initShortsPerRow();
        });

        this.observer.observe(this.host.nativeElement);

        this.getTempVideos();
        this.showVideos = this.fillData();
        this.initItemPerRow();

    }

    ngAfterViewInit(): void {

    }

    ngAfterContentChecked(): void {

    }

    ngDoCheck(): void {

    }

    ngOnDestroy() {
        this.observer.unobserve(this.host.nativeElement);
    }

    initItemPerRow() {
        const innerWidth = window.innerWidth;

        if (innerWidth < 1142 && this.showVideos[0].length === 4) {
            this.itemPerRow = 3;
            this.countLoop = 3;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }
        if (innerWidth < 888 && this.showVideos[0].length === 3) {
            this.itemPerRow = 2;
            this.countLoop = 4;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }
        if (innerWidth < 512 && this.showVideos[0].length === 2) {
            this.itemPerRow = 1;
            this.countLoop = 8;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }

        if (innerWidth >= 512 && this.showVideos[0].length === 1) {
            this.itemPerRow = 2;
            this.countLoop = 4;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }
        if (innerWidth >= 888 && this.showVideos[0].length === 2) {
            this.itemPerRow = 3;
            this.countLoop = 3;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }
        if (innerWidth >= 1142 && this.showVideos[0].length === 3) {
            this.itemPerRow = 4;
            this.countLoop = 2;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }
    }

    initShortsPerRow(): void{
        if(this.width$.value <= 1337 &&  this.shortsPerRow === 8){
            this.shortsPerRow = this.shortsPerRow - 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value <= 1299  && this.shortsPerRow === 7){
            this.shortsPerRow = this.shortsPerRow - 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value <= 984  && this.shortsPerRow === 6){
            this.shortsPerRow = this.shortsPerRow - 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value <= 976  && this.shortsPerRow === 5){
            this.shortsPerRow = this.shortsPerRow - 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value <= 648  && this.shortsPerRow === 4){
            this.shortsPerRow = this.shortsPerRow - 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value <= 646  && this.shortsPerRow === 3){
            this.shortsPerRow = this.shortsPerRow - 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        
        if(this.width$.value > 646  && this.shortsPerRow === 2){
            this.shortsPerRow = this.shortsPerRow + 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value > 648  && this.shortsPerRow === 3){
            this.shortsPerRow = this.shortsPerRow + 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value > 976  && this.shortsPerRow === 4){
            this.shortsPerRow = this.shortsPerRow + 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value > 984  && this.shortsPerRow === 5){
            this.shortsPerRow = this.shortsPerRow + 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value > 1299  && this.shortsPerRow === 6){
            this.shortsPerRow = this.shortsPerRow + 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
        if(this.width$.value > 1337 &&  this.shortsPerRow === 7){
            this.shortsPerRow = this.shortsPerRow + 1;
            this._shorts= [...shorts.slice(0,this.shortsPerRow)];
        }
    }

    fillData(): any {
        let boxVideos = [];

        for (let i = 0; i < this.countLoop; i++) {
            let tempRow = [];
            for (let j = 0; j < this.itemPerRow; j++) {
                const video = this.tempVideos.shift();
                tempRow.push(video);
            }
            boxVideos.push([...tempRow]);
        }

        return boxVideos;
    }

    getTempVideos() {
        if (this._videos) {
            this.tempVideos = [...this._videos.slice(0, this.itemPerRow * this.countLoop)];
        } else {
            this.tempVideos = [...videos.slice(0, this.itemPerRow * this.countLoop)];
        }

    }

    onDashboardToggle() {
        if (this.width$.value > 1774 && this.showVideos[0].length === 4) {
            this.itemPerRow = 5;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }
        if (this.width$.value < 1774 && this.showVideos[0].length === 5) {
            this.itemPerRow = 4;
            this.getTempVideos();
            this.showVideos = this.fillData();
        }

        this.initShortsPerRow();
    }

    getVideos() {

    }
}
