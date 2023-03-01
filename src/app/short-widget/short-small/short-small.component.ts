import { Component, Input } from '@angular/core';
import { Short } from 'app/shared/interface/short.interface';
import { IconService } from 'app/shared/services/icon.service';

import { icons } from './icon-element';

@Component({
  selector: 'app-short-small',
  templateUrl: './short-small.component.html',
  styleUrls: ['./short-small.component.scss']
})
export class ShortSmallComponent {
  @Input() short!: Short;

  constructor(private iconService: IconService){
    iconService.registerIcons(icons)
  }
}
