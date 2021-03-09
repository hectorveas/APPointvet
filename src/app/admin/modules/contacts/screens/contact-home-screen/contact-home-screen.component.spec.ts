import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHomeScreenComponent } from './contact-home-screen.component';

describe('ContactHomeScreenComponent', () => {
  let component: ContactHomeScreenComponent;
  let fixture: ComponentFixture<ContactHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
