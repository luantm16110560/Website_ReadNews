import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Account} from '../account';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private account:Account;
  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createAccount(newAccount:Account)
  {
    return this.http.post(this.baseUri+'/user/create',newAccount,{headers:this.headers});
  }
  readAccount()
  {
    return this.http.get(this.baseUri+'/user/read',{headers:this.headers});
  }
  updateAccount(myAccount:Account)
  {  return this.http.put(this.baseUri+'/user/update',myAccount,{headers:this.headers});
    
  }
  deleteAccount(id:string)
  {  return this.http.delete(this.baseUri+'/user/delete/'+id,{headers:this.headers});
    
  }
  setter(acc:Account){
    this.account=acc;
  }
  getter(){
    return this.account;
  }
}
