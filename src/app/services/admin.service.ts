import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Admin } from '../models/admin';
import { ApiResponseDTO } from '../models/api-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl:string="";
  headers=new HttpHeaders().set('content-Type','application-json');

  apiUrlSave:string="http://localhost:8080/medicare-admin/validateAdminLogin";


  constructor(private http:HttpClient) { }

  public validateAdminLogin(admin:Admin):Observable<any>{
    return this.http.post(this.apiUrlSave,admin);
    

  }

 
}
