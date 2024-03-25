import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSchedulingComponent } from './calendar-scheduling.component';

describe('CalendarSchedulingComponent', () => {
  let component: CalendarSchedulingComponent;
  let fixture: ComponentFixture<CalendarSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarSchedulingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
