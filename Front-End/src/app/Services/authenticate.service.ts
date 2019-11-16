import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  AuthUser(user){
    return this.http.post(this.baseUri+'/authenticate',user)
  }  

}
