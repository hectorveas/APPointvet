import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDoctorScreenComponent } from './delete-doctor-screen.component';

describe('DeleteDoctorScreenComponent', () => {
  let component: DeleteDoctorScreenComponent;
  let fixture: ComponentFixture<DeleteDoctorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDoctorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDoctorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
