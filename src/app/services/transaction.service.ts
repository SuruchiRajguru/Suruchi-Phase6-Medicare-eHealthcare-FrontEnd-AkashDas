import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { TransactionDetailsRequest } from '../models/transaction-details-request';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  apiUrl:string="";
  headers=new HttpHeaders().set('content-Type','application-json');

  apiUrlSave:string="http://localhost:8080/medicare/saveTransaction";

  constructor(private http:HttpClient) { }

  public listTransaction():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.apiUrl);
 }

 public saveTransaction(transactionDetailsRequest:TransactionDetailsRequest):Observable<any>
 {
   return this.http.post(this.apiUrlSave,transactionDetailsRequest);
 }
}
