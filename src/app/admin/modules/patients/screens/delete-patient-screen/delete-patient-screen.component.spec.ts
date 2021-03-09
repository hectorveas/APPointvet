import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePatientScreenComponent } from './delete-patient-screen.component';

describe('DeletePatientScreenComponent', () => {
  let component: DeletePatientScreenComponent;
  let fixture: ComponentFixture<DeletePatientScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePatientScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePatientScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
