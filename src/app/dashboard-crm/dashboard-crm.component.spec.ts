import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCrmComponent } from './dashboard-crm.component';

describe('DashboardCrmComponent', () => {
  let component: DashboardCrmComponent;
  let fixture: ComponentFixture<DashboardCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardCrmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
