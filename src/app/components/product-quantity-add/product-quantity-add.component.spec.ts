import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityAddComponent } from './product-quantity-add.component';

describe('ProductQuantityAddComponent', () => {
  let component: ProductQuantityAddComponent;
  let fixture: ComponentFixture<ProductQuantityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductQuantityAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuantityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
