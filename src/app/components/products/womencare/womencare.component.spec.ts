import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomencareComponent } from './womencare.component';

describe('WomencareComponent', () => {
  let component: WomencareComponent;
  let fixture: ComponentFixture<WomencareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomencareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomencareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
