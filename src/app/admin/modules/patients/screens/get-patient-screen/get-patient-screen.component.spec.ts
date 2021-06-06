import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPatientScreenComponent } from './get-patient-screen.component';

describe('GetPatientScreenComponent', () => {
  let component: GetPatientScreenComponent;
  let fixture: ComponentFixture<GetPatientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPatientScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPatientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
