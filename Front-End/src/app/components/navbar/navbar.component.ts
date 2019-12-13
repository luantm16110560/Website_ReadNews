import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../../Services/authenticate.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthenticateService,  private router:Router,private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  onLogoutClick()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
