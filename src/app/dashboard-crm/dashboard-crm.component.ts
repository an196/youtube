import { Component, HostListener, OnInit } from '@angular/core';
import { videos } from 'data/dummy.data';

@Component({
    selector: 'app-dashboard-crm',
    templateUrl: './dashboard-crm.component.html',
    styleUrls: ['./dashboard-crm.component.scss'],
})
export class DashboardCrmComponent implements OnInit {
    numberCard = [1, 1, 1, 1];
    private tempVideos: Array<any> = [...videos.slice(0,8)];
    public showVideos!: Object[][];
    private itemPerRow = 4;
    private countLoop = this.tempVideos.length / this.itemPerRow;

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.initItemPerRow();
    }

    constructor() {}
    ngOnInit(): void {
        this.showVideos = this.fillData();
        console.log(this.showVideos);
        this.initItemPerRow();
    }

    initItemPerRow() {
        const innerWidth = window.innerWidth;

        if (innerWidth < 1142 && this.showVideos[0].length === 4) {
            this.pushVideo();
        }
        if (innerWidth < 888 && this.showVideos[0].length === 3) {
            this.pushVideo();
        }
        if (innerWidth < 512 && this.showVideos[0].length === 2) {
            this.pushVideo();
        }

        if (innerWidth >= 512 && this.showVideos[0].length === 1) {
            this.popVideo();
        }
        if (innerWidth >= 888 && this.showVideos[0].length === 2) {
            this.popVideo();
        }
        if (innerWidth >= 1142 && this.showVideos[0].length === 3) {
            this.popVideo();
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

    pushVideo() {
        for (let i = 0; i < this.countLoop; i++)
            this.tempVideos.push(this.showVideos[i].pop());
    }

    popVideo() {
        for (let i = this.countLoop - 1; i >= 0; i--)
            this.showVideos[i].push(this.tempVideos.pop());
    }
}
