import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDoctorScreenComponent } from './get-doctor-screen.component';

describe('GetDoctorScreenComponent', () => {
  let component: GetDoctorScreenComponent;
  let fixture: ComponentFixture<GetDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
