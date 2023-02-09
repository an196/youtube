import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { chips } from './element';

@Component({
  selector: 'app-chip-header',
  templateUrl: './chip-header.component.html',
  styleUrls: ['./chip-header.component.scss'],
})
export class ChipHeaderComponent implements AfterViewInit {
  @ViewChild('chipContainer', { static: true }) chipContainer!: ElementRef;
  @ViewChild('chipItemContainer', { static: true }) chipItemContainer!: ElementRef;

  public chips = chips;

  activeLeftBtn: boolean = false;
  activeRightBtn: boolean = true;

  constructor(private elRef: ElementRef) {

  }

  onResize() {
    this.resizeWorks();
  }

  ngAfterViewInit() {
  }

  onButtonClick(direction: string) {
    const { scrollLeft, clientWidth } = this.chipContainer.nativeElement;
    const widthContainer = this.chipItemContainer.nativeElement.offsetWidth;

    const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

    this.chipContainer.nativeElement.scrollTo({ left: scrollTo, behavior: 'smooth' });
    scrollTo < 0 ? this.activeLeftBtn = false :  this.activeLeftBtn = true;
    scrollTo  >= widthContainer ? this.activeRightBtn = false :  this.activeRightBtn = true;
  }

  private resizeWorks(): void {
   
  }
}
