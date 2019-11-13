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

const routesConfig:Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cate',component:ControlCateComponent},
  {path:'createUpdate',component:CreateUpdateCateComponent},
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesConfig),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
