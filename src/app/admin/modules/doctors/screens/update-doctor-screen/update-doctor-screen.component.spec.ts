import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorScreenComponent } from './update-doctor-screen.component';

describe('UpdateDoctorScreenComponent', () => {
  let component: UpdateDoctorScreenComponent;
  let fixture: ComponentFixture<UpdateDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
