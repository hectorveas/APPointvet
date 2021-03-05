import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetContactScreenComponent } from './get-contact-screen.component';

describe('GetContactScreenComponent', () => {
  let component: GetContactScreenComponent;
  let fixture: ComponentFixture<GetContactScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetContactScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
