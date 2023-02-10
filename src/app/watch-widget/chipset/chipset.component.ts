import { Component, ElementRef, ViewChild } from '@angular/core';
import { chips } from 'app/dashboard-widget/chip-header/element';

@Component({
    selector: 'app-chipset',
    templateUrl: './chipset.component.html',
    styleUrls: ['./chipset.component.scss'],
})
export class ChipsetComponent {
    @ViewChild('chipContainer', { static: true }) chipContainer!: ElementRef;
    @ViewChild('chipItemContainer', { static: true })
    chipItemContainer!: ElementRef;

    public chips = chips;

    activeLeftBtn: boolean = false;
    activeRightBtn: boolean = true;

    constructor(private elRef: ElementRef) {}

    onResize() {
        this.resizeWorks();
    }
    ngAfterViewInit() {}

    onButtonClick(direction: string) {
        const { scrollLeft, clientWidth } = this.chipContainer.nativeElement;
        const widthContainer = this.chipItemContainer.nativeElement.offsetWidth;

        const scrollTo =
            direction === 'left'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth;

        this.chipContainer.nativeElement.scrollTo({
            left: scrollTo,
            behavior: 'smooth',
        });
        scrollTo < 0
            ? (this.activeLeftBtn = false)
            : (this.activeLeftBtn = true);
        scrollTo >= widthContainer
            ? (this.activeRightBtn = false)
            : (this.activeRightBtn = true);
        console.log(widthContainer);
    }

    private resizeWorks(): void {}
}
