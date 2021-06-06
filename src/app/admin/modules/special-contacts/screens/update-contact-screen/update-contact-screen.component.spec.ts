import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactScreenComponent } from './update-contact-screen.component';

describe('UpdateContactScreenComponent', () => {
  let component: UpdateContactScreenComponent;
  let fixture: ComponentFixture<UpdateContactScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
