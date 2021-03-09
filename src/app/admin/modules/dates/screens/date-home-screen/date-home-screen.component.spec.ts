import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateHomeScreenComponent } from './date-home-screen.component';

describe('DateHomeScreenComponent', () => {
  let component: DateHomeScreenComponent;
  let fixture: ComponentFixture<DateHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
