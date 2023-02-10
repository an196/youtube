import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipHeaderComponent } from './chip-header.component';

describe('ChipHeaderComponent', () => {
    let component: ChipHeaderComponent;
    let fixture: ComponentFixture<ChipHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChipHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ChipHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
