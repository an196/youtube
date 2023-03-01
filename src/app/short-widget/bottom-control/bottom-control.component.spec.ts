import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomControlComponent } from './bottom-control.component';

describe('BottomControlComponent', () => {
  let component: BottomControlComponent;
  let fixture: ComponentFixture<BottomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
