import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginScreenComponent } from './user-login-screen.component';

describe('UserLoginScreenComponent', () => {
  let component: UserLoginScreenComponent;
  let fixture: ComponentFixture<UserLoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
