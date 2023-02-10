import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSecondComponent } from './watch-second.component';

describe('WatchSecondComponent', () => {
    let component: WatchSecondComponent;
    let fixture: ComponentFixture<WatchSecondComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WatchSecondComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(WatchSecondComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
