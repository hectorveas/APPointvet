import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSpecialContactScreenComponent } from './user-special-contact-screen.component';

describe('UserSpecialContactScreenComponent', () => {
  let component: UserSpecialContactScreenComponent;
  let fixture: ComponentFixture<UserSpecialContactScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSpecialContactScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSpecialContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
