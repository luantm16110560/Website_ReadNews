import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {News} from '../news';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news:News;
  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }
  createNews(newNews:News)
  {
    return this.http.post(this.baseUri+'/news/create',newNews,{headers:this.headers});
  }
  readNews()
  {
    return this.http.get(this.baseUri+'/news/read/',{headers:this.headers});
  }
  readNewsByCate(id:string)
  {
    return this.http.get(this.baseUri+'/news/read_cate/'+id,{headers:this.headers});
  }
  updateNews(myNews:News)
  {  return this.http.put(this.baseUri+'/news/update',myNews,{headers:this.headers});
    
  }
  deleteNews(id:string)
  {  return this.http.delete(this.baseUri+'/news/delete/'+id,{headers:this.headers});
    
  }
  setter(news:News){
    this.news=news;
  }
  getter(){
    return this.news;
  }
}
