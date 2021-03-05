import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorHelpScreenComponent } from './doctor-help-screen.component';

describe('DoctorHelpScreenComponent', () => {
  let component: DoctorHelpScreenComponent;
  let fixture: ComponentFixture<DoctorHelpScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorHelpScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorHelpScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
