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
  openedSideMenu2!: boolean;

  @ViewChild('sidemenu') sidemenu!: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {    
    this.initState();
   
  }

  ngAfterViewChecked(): void {

  }

  ngOnInit(): void {
    this.showFiller = true;
    this.activeSideNav = true;
    this.openedSideMenu = true;

    this.initState();
  }

  initState(){
    const innerWidth = window.innerWidth;
    const breakpoint = 1312;

    if(innerWidth < breakpoint){
      this.openedSideMenu2 = true;
    }
    else{
      this.openedSideMenu2 = false;
    }

    if(innerWidth < breakpoint && this.openedSideMenu){
      this.openedSideMenu = false;
    }
    if(innerWidth >= breakpoint && !this.openedSideMenu)
      this.openedSideMenu = true;
    if(innerWidth < 790){
      this.activeSideNav= false;
    }
    else{
      this.activeSideNav= true;
    }
  }
}
