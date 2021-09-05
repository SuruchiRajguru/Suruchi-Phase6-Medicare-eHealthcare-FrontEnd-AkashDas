import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Signup } from '../models/signup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiUrlSave:string="http://localhost:8080/medicare/saveUserSignUp";
  headers=new HttpHeaders().set('content-Type','application-json');

  constructor(private http:HttpClient) { }

  public saveSignUp(signupvar:Signup){
    return this.http.post<Signup>(this.apiUrlSave,signupvar);
  }

 
}
