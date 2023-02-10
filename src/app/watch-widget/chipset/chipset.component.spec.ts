import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsetComponent } from './chipset.component';

describe('ChipsetComponent', () => {
    let component: ChipsetComponent;
    let fixture: ComponentFixture<ChipsetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChipsetComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ChipsetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
