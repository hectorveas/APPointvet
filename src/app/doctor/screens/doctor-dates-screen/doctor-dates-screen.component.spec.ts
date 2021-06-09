import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDatesScreenComponent } from './doctor-dates-screen.component';

describe('DoctorDatesScreenComponent', () => {
  let component: DoctorDatesScreenComponent;
  let fixture: ComponentFixture<DoctorDatesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDatesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
