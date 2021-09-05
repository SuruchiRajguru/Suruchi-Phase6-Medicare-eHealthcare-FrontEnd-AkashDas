import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Signin } from '../models/signin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  apiUrlSignIn:string="http://localhost:8080/medicare/validateLogin";
  headers=new HttpHeaders().set('content-Type','application-json');

  constructor(private http:HttpClient) { }

  public validateLogin(signIn:Signin):Observable<any>
  {
    return this.http.post(`http://localhost:8080/medicare/validateLogin`,signIn);
  }


  

 
}
