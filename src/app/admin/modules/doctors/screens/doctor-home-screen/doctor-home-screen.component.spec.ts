import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHomeScreenComponent } from './doctor-home-screen.component';

describe('DoctorHomeScreenComponent', () => {
  let component: DoctorHomeScreenComponent;
  let fixture: ComponentFixture<DoctorHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
