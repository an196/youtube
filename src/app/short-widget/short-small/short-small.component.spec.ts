import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortSmallComponent } from './short-small.component';

describe('ShortSmallComponent', () => {
  let component: ShortSmallComponent;
  let fixture: ComponentFixture<ShortSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
