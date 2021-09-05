import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Category } from '../models/category';

//const baseUrl="http://localhost:8080/medicare-admin/listcategory";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string="http://localhost:8080/medicare-admin/listcategory";
  headers=new HttpHeaders().set('content-Type','application-json');

  apiUrlSave:string="http://localhost:8080/medicare-admin/savecategory";

  constructor(private http:HttpClient) {}

   public listCategory():Observable<Category[]>{
      return this.http.get<Category[]>(this.apiUrl);
   }

   public saveCategory(category:Category)
   {
     return this.http.post<Category>(this.apiUrlSave,category);
   }
  // listCategory(){
    //return this.http.get('${this.apiUrl}');
 // }

   }

