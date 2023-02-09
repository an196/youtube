import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})

export class WatchComponent implements OnInit{
  openedSideMenu!: boolean;

  ngOnInit(): void {
    this.openedSideMenu = false; //1280 720
  }
}
