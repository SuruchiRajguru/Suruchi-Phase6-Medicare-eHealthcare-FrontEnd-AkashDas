import { Component, OnInit } from '@angular/core';
import { ProductQuantity } from 'src/app/models/product-quantity';
import { ProductQuantityService } from 'src/app/services/product-quantity.service';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  productQuantities:ProductQuantity[]=[];
  
  constructor(private productQuantityService:ProductQuantityService) {
    
   }

  ngOnInit(): void {
    this.productQuantityService.listProductQuantity().subscribe(data=>{this.productQuantities=data;});
  }

}
