import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDateCardComponent } from './new-date-card.component';

describe('NewDateCardComponent', () => {
  let component: NewDateCardComponent;
  let fixture: ComponentFixture<NewDateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
