import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDateScreenComponent } from './update-date-screen.component';

describe('UpdateDateScreenComponent', () => {
  let component: UpdateDateScreenComponent;
  let fixture: ComponentFixture<UpdateDateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
