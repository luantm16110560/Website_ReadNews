import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  authToken: any;
  user:any;

  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  AuthUser(user){
    return this.http.post(this.baseUri+'/authenticate',user)
  }  
  storeUserData(token,user)
  {
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }
  logout()
  {
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }

}
