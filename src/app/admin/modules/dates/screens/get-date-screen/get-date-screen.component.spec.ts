import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDateScreenComponent } from './get-date-screen.component';

describe('GetDateScreenComponent', () => {
  let component: GetDateScreenComponent;
  let fixture: ComponentFixture<GetDateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
