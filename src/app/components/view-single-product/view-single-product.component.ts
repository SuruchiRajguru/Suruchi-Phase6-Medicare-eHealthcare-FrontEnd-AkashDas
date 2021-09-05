import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartRequest } from 'src/app/models/cart-request';
import { ProductDetailResponse } from 'src/app/models/product-detail-response';
import { UserDetails } from 'src/app/models/user-details';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-single-product',
  templateUrl: './view-single-product.component.html',
  styleUrls: ['./view-single-product.component.css']
})
export class ViewSingleProductComponent implements OnInit {

  productId !: number;
  quantityId !: number;
  productDetailResponse : ProductDetailResponse = new ProductDetailResponse();
  userDetails : UserDetails = new UserDetails();
  cartRequest : CartRequest = new CartRequest();

  constructor(private route:ActivatedRoute,private productService: ProductsService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.quantityId = this.route.snapshot.params['quantityId'];
    console.log("productId : "+this.productId);
    console.log("quantityId : "+this.quantityId);
    this.productService.viewProduct(this.productId,this.quantityId).subscribe(product=>{
      this.productDetailResponse = product.responseData as ProductDetailResponse;
    })
  }

  onAddToCart(quantityId : number){
   
    this.userDetails = JSON.parse(localStorage.getItem('userDetails')|| '{}');
    
    if(this.userDetails.userId === null || this.userDetails.userId === 0){
      alert("Plaese Login to add Item to Cart!!!");
    }
    else{
      this.cartRequest.quantityId = quantityId;
      this.cartRequest.userId = this.userDetails.userId;
      this.productService.addToCart(this.cartRequest).subscribe(Response=>{
        if(Response){
          alert("Successfully Added to Cart");
        }else{
          alert("Something went wrong , please login & try");
        }
      });
      
    }
  }

}
