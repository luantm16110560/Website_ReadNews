import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlideComponent } from './components/slide/slide.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import {Routes, RouterModule, Router} from '@angular/router';//import Routes Module
import {CommonModule} from '@angular/common';
import { ControlCateComponent } from './category/control-cate/control-cate.component';
import { CreateUpdateCateComponent } from './category/create-update-cate/create-update-cate.component';//import Routes Module
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ControlAccountComponent } from './account/control-account/control-account.component';
import { CreateUpdateUserComponent } from './account/create-update-user/create-update-user.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AddNewsComponent } from './add-news/add-news.component';
const routesConfig:Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cate',component:ControlCateComponent},
  {path:'account',component:ControlAccountComponent},
  {path:'createUpdateAccount',component:CreateUpdateUserComponent},
  {path:'createUpdate',component:CreateUpdateCateComponent},
  {path:'add_news',component:AddNewsComponent},
  {path:'**',component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideComponent,
    LoginComponent,
    RegisterComponent,
    ControlCateComponent,
    CreateUpdateCateComponent,
    HomeComponent,
    ControlAccountComponent,
    CreateUpdateUserComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
