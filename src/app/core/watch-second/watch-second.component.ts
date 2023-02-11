import { Component, OnInit } from '@angular/core';
import { videos } from 'data/dummy.data';

@Component({
    selector: 'app-watch-second',
    templateUrl: './watch-second.component.html',
    styleUrls: ['./watch-second.component.scss'],
})
export class WatchSecondComponent implements OnInit {

    public videos = videos;
    
    ngOnInit(): void {
        
    }
}
