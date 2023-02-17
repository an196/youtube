import { Component } from '@angular/core';
import { IconService } from 'app/shared/services/icon.service';

import { icons } from './icons-element';
import { menu1, menu2, menu3, menu4, menu5 } from './menu-element';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrls: ['./profile-popup.component.scss']
})
export class ProfilePopupComponent {
  menu1 = menu1;
  menu2 = menu2;
  menu3 = menu3;
  menu4 = menu4;
  menu5 = menu5;

  constructor(private iconService: IconService) {
    iconService.registerIcons(icons);

  }
}
