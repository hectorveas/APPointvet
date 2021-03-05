import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByRutDoctorScreenComponent } from './get-by-rut-doctor-screen.component';

describe('GetByRutDoctorScreenComponent', () => {
  let component: GetByRutDoctorScreenComponent;
  let fixture: ComponentFixture<GetByRutDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByRutDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByRutDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
