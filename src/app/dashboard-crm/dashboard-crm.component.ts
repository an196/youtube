import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss'],
})

export class DashboardCrmComponent implements OnInit {
  numberCard = [1,1,1,1];


  constructor() {}
  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const breakpoint = 1312;

    console.log(event.target.innerWidth);
  }
}
