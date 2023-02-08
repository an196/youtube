import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchPrimaryComponent } from './watch-primary.component';

describe('WatchPrimaryComponent', () => {
  let component: WatchPrimaryComponent;
  let fixture: ComponentFixture<WatchPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchPrimaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
