import { Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit } from '@angular/core';
import { videos } from 'data/dummy.data';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss'],
})
export class DashboardCrmComponent implements OnInit, OnDestroy {
    width$ = new BehaviorSubject<number>(0);
    private observer!: any;

    public showVideos!: Object[][];
    private itemPerRow = 4;
    private countLoop = 2;
    private tempVideos!: Array<any>;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.initItemPerRow();
    }

    constructor(private host: ElementRef, private zone: NgZone) {

    }

    ngOnInit(): void {
        this.observer = new ResizeObserver(entries => {
            this.zone.run(() => {
                this.width$.next(entries[0].contentRect.width);

            });
            this.onDashboardToggle();
        });

        this.observer.observe(this.host.nativeElement);

        this.getTempVideos();
        this.showVideos = this.fillData();
        this.initItemPerRow();
    }

    ngOnDestroy() {
        this.observer.unobserve(this.host.nativeElement);
    }

    initItemPerRow() {
        const innerWidth = window.innerWidth;

        if (innerWidth < 1142 && this.showVideos[0].length === 4) {
            this.popVideo();
        }
        if (innerWidth < 888 && this.showVideos[0].length === 3) {
            this.popVideo();
        }
        if (innerWidth < 512 && this.showVideos[0].length === 2) {
            this.popVideo();
        }

        if (innerWidth >= 512 && this.showVideos[0].length === 1) {
            this.pushVideo();
        }
        if (innerWidth >= 888 && this.showVideos[0].length === 2) {
            this.pushVideo();
        }
        if (innerWidth >= 1142 && this.showVideos[0].length === 3) {
            this.pushVideo();
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
        this.tempVideos = [...videos.slice(0, this.itemPerRow * this.countLoop)];
    }

    popVideo() {
        for (let i = 0; i < this.countLoop; i++)
            this.tempVideos.push(this.showVideos[i].pop());
    }

    pushVideo() {
        for (let i = this.countLoop - 1; i >= 0; i--)
            this.showVideos[i].push(this.tempVideos.pop());
    }

    onDashboardToggle(){
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
        
    }
}
