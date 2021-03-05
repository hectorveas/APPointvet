import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHelpScreenComponent } from './user-help-screen.component';

describe('UserHelpScreenComponent', () => {
  let component: UserHelpScreenComponent;
  let fixture: ComponentFixture<UserHelpScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHelpScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHelpScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
