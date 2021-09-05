import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductQuantityService } from 'src/app/services/product-quantity.service';
import { ProductQuantity } from 'src/app/models/product-quantity';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/products';
import { ProductQuantityRequest } from 'src/app/models/product-quantity-request';
@Component({
  selector: 'app-product-quantity-add',
  templateUrl: './product-quantity-add.component.html',
  styleUrls: ['./product-quantity-add.component.css']
})
export class ProductQuantityAddComponent implements OnInit {

  productQuantity:ProductQuantityRequest;
  productId !: number;
  product: Products = new Products();

  constructor(private route:ActivatedRoute,private router:Router,private productQuantityService:ProductQuantityService,private productService: ProductsService) { 
    this.productQuantity=new ProductQuantityRequest();
  }
  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    console.log("productId : "+this.productId);
    this.productService.getProductById(this.productId).subscribe(data=>{this.product=data;});
  }

  onSubmit(){
    this.productQuantity.productId = this.productId;
    this.productQuantityService.saveProductQuantity(this.productQuantity).subscribe(result=>this.gotoProductQuantityList());  
  }
  gotoProductQuantityList() {
    this.router.navigate(['/adminportal/product-quantity']);
  }

  

}
