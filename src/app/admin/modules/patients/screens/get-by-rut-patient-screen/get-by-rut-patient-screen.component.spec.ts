import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByRutPatientScreenComponent } from './get-by-rut-patient-screen.component';

describe('GetByRutPatientScreenComponent', () => {
  let component: GetByRutPatientScreenComponent;
  let fixture: ComponentFixture<GetByRutPatientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByRutPatientScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByRutPatientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
