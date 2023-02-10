import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataTopRowComponent } from './metadata-top-row.component';

describe('MetadataTopRowComponent', () => {
  let component: MetadataTopRowComponent;
  let fixture: ComponentFixture<MetadataTopRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetadataTopRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetadataTopRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
