import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transaction:Transaction[]=[];

  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.transactionService.listTransaction().subscribe(data=>{this.transaction=data;});
  }


}
