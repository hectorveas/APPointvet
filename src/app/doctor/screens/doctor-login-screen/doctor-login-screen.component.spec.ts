import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLoginScreenComponent } from './doctor-login-screen.component';

describe('DoctorLoginScreenComponent', () => {
  let component: DoctorLoginScreenComponent;
  let fixture: ComponentFixture<DoctorLoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorLoginScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
