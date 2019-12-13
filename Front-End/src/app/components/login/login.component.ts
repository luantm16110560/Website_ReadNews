import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../Services/authenticate.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData={}
  public message:any;
  constructor(private authService:AuthenticateService,  private router:Router,private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {

  }
  AuthLogin(){
    this.authService.AuthUser(this.loginUserData)
    .subscribe(
      (data:any)=>{
        
       // console.log(data.mesage);
        this.message=data.mesage;
        if(data.success){
          this.authService.storeUserData(data.token,data.user);
          this.router.navigate(['home'])
        }
   
      },
      // err =>{
      //   console.log(err)
        
      
      // }
    )

  }


}
