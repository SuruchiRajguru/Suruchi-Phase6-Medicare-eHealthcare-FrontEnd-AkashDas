import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction';
import { CartService } from 'src/app/services/cart.service';
import { CartItemResponse } from 'src/app/models/cart-item-response';
import { UserDetails } from 'src/app/models/user-details';
import { TransactionDetailsRequest } from 'src/app/models/transaction-details-request';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent implements OnInit {

  transaction:Transaction;
  cartItems : CartItemResponse[] =[];
  userDetails : UserDetails = new UserDetails();
  transactionDetailsRequest : TransactionDetailsRequest = new TransactionDetailsRequest();
  currentDate : Date = new Date();
  transactionAmount : number = 0;
  quantityId : number[] = [];
  constructor(private cartService : CartService,private route:ActivatedRoute,private router:Router,private transactionService:TransactionService) { 
    this.transaction=new Transaction();
  }

  onSubmit(){
    this.transactionService.saveTransaction(this.transactionDetailsRequest).subscribe(result=>this.gotoTransactionList());  
  }
  gotoTransactionList() {
    this.router.navigate(['/transaction']);
  }
  

  ngOnInit(): void {
    // this.currentDate = Date.now();
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    if(this.userDetails.userId === null || this.userDetails.userId === 0){
      alert("Plaese Login to add Item to Cart!!!");
      this.router.navigate(['/login']);
    }
    else{
      this.cartService.getAllCheckOutItemByUserId(this.userDetails.userId).subscribe(response=>{
       
        this.cartItems = response.responseData as CartItemResponse[];
        if(this.cartItems.length === 0){
          alert("Plaese add items from cart to checkOut");
          this.router.navigate(['/cart']);

        }
        console.log(this.cartItems);
        this.transactionDetailsRequest.userId = this.userDetails.userId.toString();
      for(var cartItem of this.cartItems){
        this.transactionAmount = this.transactionAmount + cartItem.price;
        this.quantityId.push(cartItem.quantityId);

      }
      this.transactionDetailsRequest.quantityids = this.quantityId.toString();
      console.log(this.transactionDetailsRequest.quantityids);
      console.log(this.transactionAmount);
      });
      
    }
  }

}
