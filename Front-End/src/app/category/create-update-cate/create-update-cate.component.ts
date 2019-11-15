import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../Services/category.service';
import {Router} from '@angular/router';
import {Category} from '../../category';

@Component({
  selector: 'app-create-update-cate',
  templateUrl: './create-update-cate.component.html',
  styleUrls: ['./create-update-cate.component.scss']
})
export class CreateUpdateCateComponent implements OnInit {

  private xxx:Category;
  constructor(private cateService:CategoryService,private router:Router) {

   }

  ngOnInit() {
    this.xxx = this.cateService.getter()
  }
 
  createOrUpdate()
  {
    if(this.xxx._id==undefined){


      this.cateService.createCategory(this.xxx).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/home']);
        //  this.router.navigate(['/cate']);
         
        //   this.router.navigateByUrl('/menu', { skipLocationChange: true }).then(() => {
        //     this.router.navigate(['/cate']);
        // });
        },
        error=>{
          console.log(error);
        }
      )

    }
    else{
      this.cateService.updateCategory(this.xxx).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/cate']);
         
        },
        error=>{
          console.log(error);
        }
      )
    }
  
  }

}
