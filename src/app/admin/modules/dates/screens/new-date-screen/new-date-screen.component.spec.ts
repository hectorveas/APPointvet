import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDateScreenComponent } from './new-date-screen.component';

describe('NewDateScreenComponent', () => {
  let component: NewDateScreenComponent;
  let fixture: ComponentFixture<NewDateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
