import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
  import { from } from 'rxjs';
  import {Category} from '../category';
import { registerLocaleData } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private category:Category;
  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createCategory(newCategory:Category)
  {
    return this.http.post(this.baseUri+'/cate/create',newCategory,{headers:this.headers});
  }
  readCategory()
  {
    return this.http.get(this.baseUri+'/cate/read',{headers:this.headers});
  }
  updateCategory(myCategory:Category)
  {  return this.http.put(this.baseUri+'/cate/update',myCategory,{headers:this.headers});
    
  }
  deleteCategory(id:string)
  {  return this.http.delete(this.baseUri+'/cate/delete/'+id,{headers:this.headers});
    
  }
  setter(cate:Category){
    this.category=cate;
  }
  getter(){
    return this.category;
  }
}
