import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizbookingComponent } from './bizbooking.component';

describe('BizbookingComponent', () => {
  let component: BizbookingComponent;
  let fixture: ComponentFixture<BizbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BizbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BizbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
