import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpecialistScreenComponent } from './register-specialist-screen.component';

describe('RegisterSpecialistScreenComponent', () => {
  let component: RegisterSpecialistScreenComponent;
  let fixture: ComponentFixture<RegisterSpecialistScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSpecialistScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSpecialistScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
