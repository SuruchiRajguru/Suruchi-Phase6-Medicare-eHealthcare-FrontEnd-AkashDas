import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseDTO } from '../models/api-response-dto';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl:string="http://localhost:8080/medicare-admin/listproduct";
  headers=new HttpHeaders().set('content-Type','application-json');
  apiAdminUrl:string="http://localhost:8080/medicare-admin/";
  

  apiUrlSave:string="http://localhost:8080/medicare-admin/saveProduct";

  constructor(private http:HttpClient) { }

  public getCartItemByUserId(userId:number):Observable<ApiResponseDTO>{
    return this.http.get<ApiResponseDTO>(`http://localhost:8080/medicare/getAllCartItemByUserId/${userId}`);
  }
  
  public removeCartItem(cartId:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/medicare/removeCartItem/${cartId}`);
  }

  public updateCartStatus(cartId:number):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/medicare/updateCartStatus/${cartId}`);
  }

  public getAllCheckOutItemByUserId(userId:number):Observable<ApiResponseDTO>{
    return this.http.get<ApiResponseDTO>(`http://localhost:8080/medicare/getAllCheckOutItemByUserId/${userId}`);
  }

  

  
  
}
