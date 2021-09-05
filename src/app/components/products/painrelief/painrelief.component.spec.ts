import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainreliefComponent } from './painrelief.component';

describe('PainreliefComponent', () => {
  let component: PainreliefComponent;
  let fixture: ComponentFixture<PainreliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainreliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainreliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
