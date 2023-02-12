import { Component, OnInit } from '@angular/core';
import { Video } from 'app/interface/video.interface';
import { VideoService } from 'app/services/video.service';
import { videos } from 'data/dummy.data';

@Component({
    selector: 'app-watch-second',
    templateUrl: './watch-second.component.html',
    styleUrls: ['./watch-second.component.scss'],
})
export class WatchSecondComponent implements OnInit {

    public videos: Video[] = videos;
    constructor(private videoService: VideoService){

    }

    ngOnInit(): void {
        this.videoService.getVideos().subscribe(
            (results: Video[]) => {
                this.videos = [...results];
            }
        );
    }
}
