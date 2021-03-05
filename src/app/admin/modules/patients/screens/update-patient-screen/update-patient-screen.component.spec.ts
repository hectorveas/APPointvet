import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientScreenComponent } from './update-patient-screen.component';

describe('UpdatePatientScreenComponent', () => {
  let component: UpdatePatientScreenComponent;
  let fixture: ComponentFixture<UpdatePatientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
