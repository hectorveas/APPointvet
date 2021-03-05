import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactScreenComponent } from './new-contact-screen.component';

describe('NewContactScreenComponent', () => {
  let component: NewContactScreenComponent;
  let fixture: ComponentFixture<NewContactScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
