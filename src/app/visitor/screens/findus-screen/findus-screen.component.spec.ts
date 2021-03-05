import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindusScreenComponent } from './findus-screen.component';

describe('FindusScreenComponent', () => {
  let component: FindusScreenComponent;
  let fixture: ComponentFixture<FindusScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindusScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindusScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
