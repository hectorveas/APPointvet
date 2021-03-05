import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDateCardComponent } from './delete-date-card.component';

describe('DeleteDateCardComponent', () => {
  let component: DeleteDateCardComponent;
  let fixture: ComponentFixture<DeleteDateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
