import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../Services/account.service';
import {Router} from '@angular/router';
import {Account} from '../../account';
@Component({
  selector: 'app-control-account',
  templateUrl: './control-account.component.html',
  styleUrls: ['./control-account.component.scss']
})
export class ControlAccountComponent implements OnInit {
  private listAccount:any=[];
  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit() {
    this.readAccount();
  }
  newAccount(event:any){
    event.preventDefault();
    this.accountService.setter(new Account());
    this.router.navigate(['/createUpdateAccount']);
   
  }
  readAccount(){
    this.accountService.readAccount().subscribe(
      data=>{
        console.log(data);
        this.listAccount = data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  updateAccount(acc)
  {
    this.accountService.setter(acc);
    this.router.navigate(['/createUpdateAccount']);
  }
  deleteAccount(acc)
  {
    this.accountService.deleteAccount(acc._id).subscribe(
      data=>{
        this.listAccount.splice(this.listAccount.indexOf(acc),1);

     //   Xóa 1 phần tử từ vị trí số 3
        // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
        // var removed = myFish.splice(3, 1);
      },
      error=>{

      }
    )
  }
}
