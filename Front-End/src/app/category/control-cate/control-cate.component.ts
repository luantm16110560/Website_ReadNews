import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../Services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../category';
@Component({
  selector: 'app-control-cate',
  templateUrl: './control-cate.component.html',
  styleUrls: ['./control-cate.component.scss']
})
export class ControlCateComponent implements OnInit {
  private listCate:any=[];
  constructor(private cateService:CategoryService,private router:Router) {

   }



  ngOnInit() {
    this.readCate();
  }
  newCate(event:any){
    event.preventDefault();
    this.cateService.setter(new Category());
    this.router.navigate(['/createUpdate']);
   
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
  updateCate(cate)
  {
    this.cateService.setter(cate);
    this.router.navigate(['/createUpdate']);
  }
  deleteCate(cate)
  {
    this.cateService.deleteCategory(cate._id).subscribe(
      data=>{
        this.listCate.splice(this.listCate.indexOf(cate),1);

     //   Xóa 1 phần tử từ vị trí số 3
        // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
        // var removed = myFish.splice(3, 1);
      },
      error=>{

      }
    )
  }
}
