import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../Services/news.service';
import {CategoryService} from '../../Services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[
    CategoryService
  ]
})
export class HomeComponent  implements OnInit {

  arrCate:any = [];
  listNews:any = [];
  constructor(private cateService:CategoryService,private newService:NewsService){
   
  }
  ngOnInit()
  {
    this.cateService.readCategory().subscribe((data)=>{
      //.subcribe() chờ getListCate chạy xong mới xử lý tiếp kết quả
      console.log(data,'here');
      this.arrCate=data;
    });
  }
  getIDByName(name){
    this.newService.readNewsByCate(name).subscribe(
      (data:any)=>{
        console.log(data);
       this.listNews=data;
      },
      error=>{
        console.log(error);
      }
     )
  
  }
  

}
