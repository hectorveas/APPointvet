import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeScreenComponent } from './user-me-screen.component';

describe('UserMeScreenComponent', () => {
  let component: UserMeScreenComponent;
  let fixture: ComponentFixture<UserMeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
