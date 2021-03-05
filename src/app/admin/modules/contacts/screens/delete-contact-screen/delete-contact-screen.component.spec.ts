import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContactScreenComponent } from './delete-contact-screen.component';

describe('DeleteContactScreenComponent', () => {
  let component: DeleteContactScreenComponent;
  let fixture: ComponentFixture<DeleteContactScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteContactScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
