import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { ProductQuantity } from '../models/product-quantity';
import { ProductQuantityRequest } from '../models/product-quantity-request';
//import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductQuantityService {

  apiUrl:string="http://localhost:8080/medicare-admin/listproductquantity";
  headers=new HttpHeaders().set('content-Type','application-json');

  apiUrlSave:string="http://localhost:8080/medicare-admin/saveProductQuantity";


  constructor(private http:HttpClient) { }

  public listProductQuantity():Observable<ProductQuantity[]>{
    return this.http.get<ProductQuantity[]>(this.apiUrl);
}

public saveProductQuantity(productQuantity:ProductQuantityRequest)
 {
   return this.http.post<ProductQuantityRequest>(this.apiUrlSave,productQuantity);
 }

}
