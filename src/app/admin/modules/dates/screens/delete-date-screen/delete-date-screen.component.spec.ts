import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDateScreenComponent } from './delete-date-screen.component';

describe('DeleteDateScreenComponent', () => {
  let component: DeleteDateScreenComponent;
  let fixture: ComponentFixture<DeleteDateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
