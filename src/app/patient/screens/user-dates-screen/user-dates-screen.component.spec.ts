import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatesScreenComponent } from './user-dates-screen.component';

describe('UserDatesScreenComponent', () => {
  let component: UserDatesScreenComponent;
  let fixture: ComponentFixture<UserDatesScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDatesScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDatesScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
