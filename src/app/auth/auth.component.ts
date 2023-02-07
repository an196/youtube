import { AfterViewChecked, Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements AfterViewChecked  {
  showFiller = true;
  activeSideNav = false;

  ngAfterViewChecked(): void{
   
  }
}
