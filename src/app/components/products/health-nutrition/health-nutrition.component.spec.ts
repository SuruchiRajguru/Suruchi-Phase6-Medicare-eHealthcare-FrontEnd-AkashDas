import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthNutritionComponent } from './health-nutrition.component';

describe('HealthNutritionComponent', () => {
  let component: HealthNutritionComponent;
  let fixture: ComponentFixture<HealthNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
