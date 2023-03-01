import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-short-action',
  templateUrl: './short-action.component.html',
  styleUrls: ['./short-action.component.scss']
})
export class ShortActionComponent {
  @Input() shortActions!: any;

  constructor(){}
}
