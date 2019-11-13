import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../Services/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[
    CategoryService
  ]
})
export class HomeComponent  {

  arrCate:any = [];
  constructor(private cateService:CategoryService){
    cateService.readCategory().subscribe((data)=>{
      //.subcribe() chờ getListCate chạy xong mới xử lý tiếp kết quả
      console.log(data,'here');
      this.arrCate=data;
    });
  }

}
