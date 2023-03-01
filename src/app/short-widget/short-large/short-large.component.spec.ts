import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortLargeComponent } from './short-large.component';

describe('ShortLargeComponent', () => {
  let component: ShortLargeComponent;
  let fixture: ComponentFixture<ShortLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
