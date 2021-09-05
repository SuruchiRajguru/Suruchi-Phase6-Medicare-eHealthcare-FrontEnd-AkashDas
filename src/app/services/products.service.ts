import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Products } from '../models/products';
import { Productrequestpayload } from '../models/productrequestpayload';
import { ApiResponseDTO } from '../models/api-response-dto';
import { SearchTextModel } from '../models/search-text-model';
import { FilterProductRequest } from '../models/filter-product-request';
import { ResponseDTO } from '../models/response-dto';
import { CartRequest } from '../models/cart-request';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl:string="http://localhost:8080/medicare-admin/listproduct";
  headers=new HttpHeaders().set('content-Type','application-json');
  apiAdminUrl:string="http://localhost:8080/medicare-admin/";

  apiUrlSave:string="http://localhost:8080/medicare-admin/saveProduct";

  constructor(private http:HttpClient) { }

  public listProducts():Observable<Products[]>{
     return this.http.get<Products[]>(this.apiUrl);
 }

public saveProduct(productrequestpayload:Productrequestpayload):Observable<HttpEvent<any>>
 {
   const formData:FormData=new FormData();
   formData.append('request',productrequestpayload.request);
   formData.append('imgUrl',productrequestpayload.imgUrl);
   const req=new HttpRequest('POST',`${this.apiUrlSave}`,formData,{
    
     responseType:'json'

   });
       return this.http.request(req);
 }

 public getProductById(productId:number):Observable<Products>{
  return this.http.get<Products>(`http://localhost:8080/medicare-admin/getProductById/${productId}`);
}

public getAllProducts():Observable<ApiResponseDTO>{
  return this.http.get<ApiResponseDTO>(`http://localhost:8080/medicare/viewAllProducts`);
}

public getAllProductsBySearchText(searchTextModel : SearchTextModel):Observable<any>{
  return this.http.post(`http://localhost:8080/medicare/searchProductByText`,searchTextModel);
}

public getAllProductsByFilter(filterRequest : FilterProductRequest):Observable<any>{
  return this.http.post(`http://localhost:8080/medicare/filterProduct`,filterRequest);
}

public viewProduct(productId:number,quantityId:number):Observable<ResponseDTO>{
  return this.http.get<ResponseDTO>(`http://localhost:8080/medicare/viewProduct/${productId}/${quantityId}`);
}

public addToCart(cartRequest : CartRequest):Observable<any>{
  return this.http.post(`http://localhost:8080/medicare/saveCartItemByUserId`,cartRequest);
}
 

}
