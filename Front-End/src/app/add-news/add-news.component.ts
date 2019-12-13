import { Component, OnInit } from '@angular/core';
import {NewsService} from '../Services/news.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {News} from '../news';
import {CategoryService} from '../Services/category.service';
@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  private newNew:News;
  private listCate:any=[];
  constructor(private newsService:NewsService,private router:Router,private cateService:CategoryService) { }

  ngOnInit() {
    this.readCate();
    this.newsService.setter(new News());
    this.newNew = this.newsService.getter()
    // this.newsService.setter(new News());
  }
  readCate(){
   this.cateService.readCategory().subscribe(
    data=>{
      console.log(data);
      this.listCate = data;
    },
    error=>{
      console.log(error);
    }
   )
  }
  AddNews()
  {
    

    this.newsService.createNews(this.newNew)
    .subscribe(
      (data:any)=>{
        
        console.log(data);
        this.router.navigate(['/home']);
      },
      err =>{
        console.log(err)
      
      }
    )
   
  
    

    }
  }


