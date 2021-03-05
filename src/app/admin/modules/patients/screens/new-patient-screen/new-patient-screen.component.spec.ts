import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientScreenComponent } from './new-patient-screen.component';

describe('NewPatientScreenComponent', () => {
  let component: NewPatientScreenComponent;
  let fixture: ComponentFixture<NewPatientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPatientScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
