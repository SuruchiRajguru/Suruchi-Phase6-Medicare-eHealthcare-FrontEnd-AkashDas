import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetescareComponent } from './diabetescare.component';

describe('DiabetescareComponent', () => {
  let component: DiabetescareComponent;
  let fixture: ComponentFixture<DiabetescareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetescareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetescareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
