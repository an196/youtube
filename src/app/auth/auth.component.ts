import { AfterViewChecked, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit,AfterViewChecked {
  showFiller!: boolean;
  activeSideNav!: boolean;
  openedSideMenu!: boolean;

  @ViewChild('sidemenu') sidemenu!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const breakpoint = 1312;

    if(event.target.innerWidth < breakpoint && this.openedSideMenu){
      this.openedSideMenu = false;
    }
    if(event.target.innerWidth >= breakpoint && !this.openedSideMenu)
      this.openedSideMenu = true;
  }

  ngAfterViewChecked(): void {

  }

  ngOnInit(): void {
    this.showFiller = true;
    this.activeSideNav = false;
    this.openedSideMenu = true;
  }
}
