import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss'],
})

export class DashboardCrmComponent implements OnInit {
  numberCard = [1, 1, 1, 1];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.initItemPerRow();
  }

  constructor() { }
  ngOnInit(): void {
    this.initItemPerRow();
  }



  initItemPerRow() {
    const innerWidth = window.innerWidth;

    if (innerWidth < 1142 && this.numberCard.length === 4) {
      this.numberCard.pop();
    }
    if (innerWidth < 888 && this.numberCard.length === 3) {
      this.numberCard.pop();
    }
    if (innerWidth < 512 && this.numberCard.length === 2) {
      this.numberCard.pop();
    }

    if (innerWidth >= 512 && this.numberCard.length === 1) {
      this.numberCard.push(1);
    }
    if (innerWidth >= 888 && this.numberCard.length === 2) {
      this.numberCard.push(1);
    }
    if (innerWidth >= 1142 && this.numberCard.length === 3) {
      this.numberCard.push(1);
    }
  }
}
