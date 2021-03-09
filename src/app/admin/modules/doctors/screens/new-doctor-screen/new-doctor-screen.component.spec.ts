import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoctorScreenComponent } from './new-doctor-screen.component';

describe('NewDoctorScreenComponent', () => {
  let component: NewDoctorScreenComponent;
  let fixture: ComponentFixture<NewDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
