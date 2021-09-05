import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl:string="http://localhost:8080/medicare-admin/listcompany";
  headers=new HttpHeaders().set('content-Type','application-json');

  apiUrlSave:string="http://localhost:8080/medicare-admin/savecompany";

  constructor(private http:HttpClient) { }

  public listCompany():Observable<Company[]>{
      return this.http.get<Company[]>(this.apiUrl);
  }

  public saveCompany(company:Company)
   {
     return this.http.post<Company>(this.apiUrlSave,company);
   }

}
