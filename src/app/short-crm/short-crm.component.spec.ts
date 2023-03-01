import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCrmComponent } from './short-crm.component';

describe('ShortCrmComponent', () => {
  let component: ShortCrmComponent;
  let fixture: ComponentFixture<ShortCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortCrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
