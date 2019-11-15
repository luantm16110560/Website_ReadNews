import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import {Account} from '../../account';
@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.scss']
})
export class CreateUpdateUserComponent implements OnInit {

  private acc:Account;
  constructor(private accountService:AccountService,private router:Router) {

   }

  ngOnInit() {
    this.acc = this.accountService.getter()
  }
 
  createOrUpdate()
  {
    if(this.acc._id==undefined){


      this.accountService.createAccount(this.acc).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/account']);
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
      this.accountService.updateAccount(this.acc).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/account']);
         
        },
        error=>{
          console.log(error);
        }
      )
    }
  
  }


}
