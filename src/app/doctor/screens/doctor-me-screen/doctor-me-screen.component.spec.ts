import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMeScreenComponent } from './doctor-me-screen.component';

describe('DoctorMeScreenComponent', () => {
  let component: DoctorMeScreenComponent;
  let fixture: ComponentFixture<DoctorMeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorMeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
