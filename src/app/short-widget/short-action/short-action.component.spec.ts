import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortActionComponent } from './short-action.component';

describe('ShortActionComponent', () => {
  let component: ShortActionComponent;
  let fixture: ComponentFixture<ShortActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
