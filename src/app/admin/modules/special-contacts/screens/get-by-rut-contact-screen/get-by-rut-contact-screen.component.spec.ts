import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByRutContactScreenComponent } from './get-by-rut-contact-screen.component';

describe('GetByRutContactScreenComponent', () => {
  let component: GetByRutContactScreenComponent;
  let fixture: ComponentFixture<GetByRutContactScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetByRutContactScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByRutContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
