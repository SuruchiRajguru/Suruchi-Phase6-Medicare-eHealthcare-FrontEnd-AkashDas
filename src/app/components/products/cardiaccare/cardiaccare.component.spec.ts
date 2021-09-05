import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiaccareComponent } from './cardiaccare.component';

describe('CardiaccareComponent', () => {
  let component: CardiaccareComponent;
  let fixture: ComponentFixture<CardiaccareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardiaccareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiaccareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
