import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemResponse } from 'src/app/models/cart-item-response';
import { UserDetails } from 'src/app/models/user-details';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems : CartItemResponse[] =[];
  userDetails : UserDetails = new UserDetails();
  constructor(private cartService : CartService,private router : Router) { }

  ngOnInit(): void {

    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    if(this.userDetails.userId === null || this.userDetails.userId === 0){
      alert("Plaese Login to add Item to Cart!!!");
      this.router.navigate(['/login']);
    }
    else{
      this.cartService.getCartItemByUserId(this.userDetails.userId).subscribe(response=>{
        console.log(Response);
        this.cartItems = response.responseData as CartItemResponse[];
      });
    }

  }

  onRemoveFromCart(cartId : number){
    this.cartService.removeCartItem(cartId).subscribe(response=>{
      if(response){
        this.cartService.getCartItemByUserId(this.userDetails.userId).subscribe(response=>{
          console.log(Response);
          this.cartItems = response.responseData as CartItemResponse[];
        });
      }else{
        alert("Something went wrong, please try again");
      }
    });
  }

  onCheckOut(){
    this.router.navigate(['/transaction-add']);
  }
  onAddToBuy(cartId : number){
    this.cartService.updateCartStatus(cartId).subscribe(response=>{
      if(response){
        this.cartService.getCartItemByUserId(this.userDetails.userId).subscribe(response=>{
          console.log(Response);
          this.cartItems = response.responseData as CartItemResponse[];
        });
      }else{
        alert("Something went wrong, please try again");
      }
    });
  }
  
}
