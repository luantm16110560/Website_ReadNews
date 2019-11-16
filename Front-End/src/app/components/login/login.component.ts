import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../Services/authenticate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData={}
  constructor(private authService:AuthenticateService) { }

  ngOnInit() {

  }
  AuthLogin(){
    this.authService.AuthUser(this.loginUserData)
    .subscribe(
      res => console.log("login success"),
      err =>console.log(err)
    )

  }


}
